import { Skeleton } from "../ui/skeleton";

function PostCommentBoxSkeleton() {
  return (
    <div className="post_comment-box">
      <div className="flex w-full flex-1 items-start gap-2 md:px-3">
        <Skeleton className="h-5 w-5 rounded-full md:h-8 md:w-8" />
        <Skeleton className="h-10 w-3/5 sm:w-4/5" />
      </div>
      <div className="flex w-full flex-1 items-start gap-2 md:px-3">
        <Skeleton className="h-5 w-5 rounded-full md:h-8 md:w-8" />
        <Skeleton className="h-24 w-3/5 sm:w-4/5" />
      </div>
      <div className="flex w-full flex-1 items-start gap-2 md:px-3">
        <Skeleton className="h-5 w-5 rounded-full md:h-8 md:w-8" />
        <Skeleton className="h-14 w-3/5 sm:w-4/5" />
      </div>
      <div className="flex w-full flex-1 items-start gap-2 md:px-3">
        <Skeleton className="h-5 w-5 rounded-full md:h-8 md:w-8" />
        <Skeleton className="h-12 w-3/5 sm:w-4/5" />
      </div>
    </div>
  );
}

export default PostCommentBoxSkeleton;
