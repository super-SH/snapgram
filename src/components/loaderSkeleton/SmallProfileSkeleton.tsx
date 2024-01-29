import { Skeleton } from "../ui/skeleton";

function SmallProfileSkeleton() {
  return (
    <>
      <div className="hidden items-center gap-3 md:flex">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="flex flex-col gap-2">
          <Skeleton className="h-4 w-28" />
          <Skeleton className="h-3 w-24" />
        </div>
      </div>

      <div className="md:hidden">
        <Skeleton className="h-7 w-7 rounded-full" />
      </div>
    </>
  );
}

export default SmallProfileSkeleton;
