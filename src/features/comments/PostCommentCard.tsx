import { multiFormatDateString } from "@/lib/utils";
import { CommentWithAuthor } from "@/types/collection";

function PostCommentCard({ comment }: { comment: CommentWithAuthor }) {
  return (
    <div className="flex w-full flex-1 items-center gap-2">
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

        <p className="text-xs font-medium text-light-2">
          {comment.commentText}
        </p>
      </div>
    </div>
  );
}

export default PostCommentCard;
