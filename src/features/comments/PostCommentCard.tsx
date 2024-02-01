import { multiFormatDateString } from "@/lib/utils";
import { AccountType, CommentWithAuthor } from "@/types/collection";
import { useQueryClient } from "@tanstack/react-query";
import CommentOperationsDropdown from "./CommentOperationsDropdown";
import { Link } from "react-router-dom";

type PostCommentCardProps = {
  comment: CommentWithAuthor;
};

function PostCommentCard({ comment }: PostCommentCardProps) {
  const queryClient = useQueryClient();

  const account = queryClient.getQueryData<AccountType>(["account"]);
  const accountId = account?.id;

  const isAuthorOfComment = accountId === comment.authorId.id;

  return (
    <div className="flex w-full flex-1 items-start gap-2 md:px-3">
      <Link to={`/profile/${comment.authorId.id}`}>
        <img
          src={comment.authorId.profileUrl || ""}
          alt={comment.authorId.name || "profile"}
          className="h-5 w-5 rounded-full object-cover object-center md:h-8 md:w-8"
        />
      </Link>
      <div className="flex flex-1 flex-col items-start justify-between gap-0.5">
        <div className="flex items-center gap-1 font-semibold text-light-3">
          <Link to={`/profile/${comment.authorId.id}`}>
            <p className="text-[10px] md:text-sm ">{comment.authorId.name}</p>
          </Link>
          <span className="font-thin">-</span>
          <p className="text-[8px] md:text-xs">
            {multiFormatDateString(comment.created_at)}
          </p>
        </div>

        <p className="break-all text-[10px] font-medium text-light-2 md:text-xs">
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
