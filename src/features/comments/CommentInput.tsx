import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AccountType } from "@/types/collection";
import { FormEvent, useEffect, useState } from "react";
import { useCreateComment } from "./useCreateComment";
import { Loader } from "@/components/shared";
import { useEditCommentContext } from "@/contexts/EditCommentContext";
import { useEditComment } from "./useEditComment";
import { useEdtingComment } from "./useEditingComment";

type CommentInputProps = {
  postId: number;
  loggedAccountData: AccountType;
  postCreatorId: number;
};

function CommentInput({
  loggedAccountData,
  postId,
  postCreatorId,
}: CommentInputProps) {
  const [commentInput, setCommentInput] = useState("");
  const { editingCommentId, isEditingSession, setEditingCommentId } =
    useEditCommentContext();

  const { createComment, isPending: isCreatingComment } = useCreateComment();
  const { editComment, isPending: isEditingComment } = useEditComment();
  const { data: editingCommentData, isFetching: isFetchingEdtingComment } =
    useEdtingComment();

  useEffect(
    function () {
      if (editingCommentData?.commentText)
        setCommentInput(editingCommentData.commentText);
    },
    [editingCommentData],
  );

  function handleCommentCreateAndEdit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!commentInput) return;

    if (isEditingSession && editingCommentId) {
      const updateComment = {
        commentText: commentInput,
        commentId: editingCommentId,
      };
      editComment(updateComment, {
        onSettled: () => {
          setCommentInput("");
          setEditingCommentId(null);
        },
      });
    } else {
      const newComment = {
        authorId: loggedAccountData.id,
        postId,
        commentText: commentInput,
      };

      createComment(
        { newComment, postCreatorId },
        {
          onSettled: () => {
            setCommentInput("");
          },
        },
      );
    }
  }

  function handleCancelEditing(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();
    setEditingCommentId(null);
    setCommentInput("");
  }

  return (
    <div className="flex w-full items-center gap-2 md:gap-4">
      <img
        src={
          loggedAccountData.profileUrl ||
          "/assets/icons/profile-placeholder.svg"
        }
        alt={loggedAccountData.name || "profile"}
        className="hidden h-8 w-8 rounded-full object-cover object-center sm:inline  md:h-12 md:w-12"
      />

      <form className="w-full" onSubmit={handleCommentCreateAndEdit}>
        <div className="flex w-full items-center gap-1 rounded-lg bg-dark-4 px-2 sm:px-4 md:px-2 lg:px-5">
          <Input
            type="text"
            placeholder={
              isFetchingEdtingComment ? "Loading..." : "Write a comment..."
            }
            className="comment-input"
            value={commentInput}
            onChange={(e) => setCommentInput(e.target.value)}
          />
          {isEditingSession && (
            <Button
              type="reset"
              className="px-0 sm:px-2 md:px-1 lg:px-3"
              onClick={handleCancelEditing}
            >
              <svg
                width="18px"
                height="18px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.5 5.5L5.50002 18.4998"
                  stroke="#FF5A5A"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="#FF5A5A"
                  strokeWidth="1.5"
                />
              </svg>
            </Button>
          )}
          <Button type="submit" className="px-0 sm:px-2 md:px-1 lg:px-3">
            {isCreatingComment || isEditingComment ? (
              <Loader />
            ) : (
              <svg
                width="18px"
                height="18px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.4975 18.4851L20.6281 9.09373C21.8764 5.34874 22.5006 3.47624 21.5122 2.48782C20.5237 1.49939 18.6511 2.12356 14.906 3.37189L5.57477 6.48218C3.49295 7.1761 2.45203 7.52305 2.13608 8.28637C2.06182 8.46577 2.01692 8.65596 2.00311 8.84963C1.94433 9.67365 2.72018 10.4495 4.27188 12.0011L4.55451 12.2837C4.80921 12.5384 4.93655 12.6658 5.03282 12.8075C5.22269 13.0871 5.33046 13.4143 5.34393 13.7519C5.35076 13.9232 5.32403 14.1013 5.27057 14.4574C5.07488 15.7612 4.97703 16.4131 5.0923 16.9147C5.32205 17.9146 6.09599 18.6995 7.09257 18.9433C7.59255 19.0656 8.24576 18.977 9.5522 18.7997L9.62363 18.79C9.99191 18.74 10.1761 18.715 10.3529 18.7257C10.6738 18.745 10.9838 18.8496 11.251 19.0285C11.3981 19.1271 11.5295 19.2585 11.7923 19.5213L12.0436 19.7725C13.5539 21.2828 14.309 22.0379 15.1101 21.9985C15.3309 21.9877 15.5479 21.9365 15.7503 21.8474C16.4844 21.5244 16.8221 20.5113 17.4975 18.4851Z"
                  stroke="#FFB620"
                  strokeWidth="1.5"
                />
                <path
                  d="M6 18L21 3"
                  stroke="#FFB620"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}

export default CommentInput;
