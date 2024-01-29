import { Skeleton } from "../ui/skeleton";

function AccountDetailSkeleton() {
  return (
    <div className="profile-inner_container">
      <Skeleton className="h-20 w-20 rounded-full xl:h-36 xl:w-36" />

      <div className="flex w-full flex-col gap-4">
        <div className="flex flex-col items-center gap-4 xl:items-start">
          <div className="flex flex-col items-center justify-start gap-2 xl:items-start">
            <Skeleton className="h-8 w-32 xl:h-9 xl:w-36" />
            <Skeleton className="h-5 w-48 xl:h-6 xl:w-56" />
          </div>

          <Skeleton className="h-11 w-28" />
        </div>
        <Skeleton className="h-14 w-48 self-center xl:self-start" />
        <div className="space-y-2 self-center xl:self-start">
          <Skeleton className="h-3 w-36  sm:w-96" />
          <Skeleton className="h-3 w-36 sm:w-96" />
          <Skeleton className="h-3 w-12 sm:w-52" />
        </div>
      </div>
    </div>
  );
}

export default AccountDetailSkeleton;
