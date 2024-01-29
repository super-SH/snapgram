import { Skeleton } from "../ui/skeleton";

function HomePostCardSkeleton() {
  return (
    <div className="post-card flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <Skeleton className="h-12 w-12 rounded-full" />

        <div className="flex flex-col gap-3">
          <Skeleton className="h-4 w-24 lg:w-48" />
          <Skeleton className="h-3 w-12 lg:w-24" />
        </div>
      </div>
      <div className="space-y-2 py-3">
        <Skeleton className="h-4 w-48 lg:w-96" />
        <Skeleton className="h-4 w-36 lg:w-72" />
      </div>

      <Skeleton className="h-64 w-full rounded-[24px] xs:h-[400px] lg:h-[450px]" />
    </div>
  );
}

export default HomePostCardSkeleton;
