import { Skeleton } from "../ui/skeleton";

function PostDetailSkeleton() {
  return (
    <div className="post_details-card">
      <Skeleton className="h-80 flex-shrink-0 rounded-t-[30px] p-5 sm:h-[412px] lg:h-[520px] xl:h-[582px] xl:w-[48%] xl:rounded-l-[24px] xl:rounded-tr-none" />

      <div className="post_details-info">
        <div className="flex-between w-full">
          <div className="flex items-center gap-3">
            <Skeleton className="h-12 w-12 rounded-full" />

            <div className="flex flex-col gap-3">
              <Skeleton className="h-4 w-24 lg:w-48" />
              <Skeleton className="h-3 w-12 lg:w-24" />
            </div>
          </div>
        </div>

        <hr className="w-full border border-dark-4/80" />

        <div className="flex w-full flex-1 flex-col gap-2">
          <Skeleton className="h-3 w-full  sm:w-96" />
          <Skeleton className="h-3 w-full sm:w-96" />
          <Skeleton className="h-3 w-12 sm:w-52" />
        </div>

        <Skeleton className="h-12 w-full self-end rounded-full" />
      </div>
    </div>
  );
}

export default PostDetailSkeleton;
