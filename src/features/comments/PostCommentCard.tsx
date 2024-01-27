import { multiFormatDateString } from "@/lib/utils";
import { AccountType, CommentWithAuthor } from "@/types/collection";
import { useQueryClient } from "@tanstack/react-query";
import CommentOperationsDropdown from "./CommentOperationsDropdown";

function PostCommentCard({ comment }: { comment: CommentWithAuthor }) {
  const queryClient = useQueryClient();

  const account = queryClient.getQueryData<AccountType>(["account"]);
  const accountId = account?.id;

  const isAuthorOfComment = accountId === comment.authorId.id;

  return (
    <div className="flex w-full flex-1 items-start gap-2 px-3">
      <img
        src={comment.authorId.profileUrl || ""}
        alt={comment.authorId.name || "profile"}
        className="h-8 w-8 rounded-full object-cover object-center"
      />
      <div className="flex flex-1 flex-col items-start justify-between gap-0.5">
        <div className="flex items-center gap-1 font-semibold text-light-3">
          <p className="text-sm ">{comment.authorId.name}</p>
          <span className="font-thin">-</span>
          <p className="text-xs">{multiFormatDateString(comment.created_at)}</p>
        </div>

        <p className="break-all text-xs font-medium text-light-2">
          {comment.commentText}
        </p>
      </div>

      {isAuthorOfComment && comment.postId && (
        <CommentOperationsDropdown
          commentId={comment.id}
          postId={comment.postId}
        />
      )}
    </div>
  );
}

export default PostCommentCard;
