import { Skeleton } from "../ui/skeleton";

function UserCardSkeleton() {
  return (
    <div className="flex-center w-48 flex-col gap-4 rounded-[20px] border border-dark-4 bg-dark-2 px-4 py-5">
      <Skeleton className="h-16 w-16 rounded-full" />
      <div className="flex flex-col items-center justify-center gap-2">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-3 w-32" />
      </div>

      <Skeleton className="h-10 w-24" />
    </div>
  );
}

export default UserCardSkeleton;
