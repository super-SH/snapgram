import { Skeleton } from "@/components/ui/skeleton";

function NotificationSkeleton() {
  return (
    <div className="flex w-full max-w-5xl flex-col">
      <div className="flex items-center gap-2 border-b border-dark-4 py-3 md:py-4 lg:py-5">
        <Skeleton className="h-6 w-6 rounded-full md:h-8 md:w-8 xl:h-10 xl:w-10" />
        <div className="flex flex-col gap-4">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-3 w-[200px]" />
        </div>
      </div>
      <div className="flex items-center gap-2 border-b border-dark-4 py-3 md:py-4 lg:py-5">
        <Skeleton className="h-6 w-6 rounded-full md:h-8 md:w-8 xl:h-10 xl:w-10" />
        <div className="flex flex-col gap-4">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-3 w-[200px]" />
        </div>
      </div>
      <div className="flex items-center gap-2 border-b border-dark-4 py-3 md:py-4 lg:py-5">
        <Skeleton className="h-6 w-6 rounded-full md:h-8 md:w-8 xl:h-10 xl:w-10" />
        <div className="flex flex-col gap-4">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-3 w-[200px]" />
        </div>
      </div>
    </div>
  );
}

export default NotificationSkeleton;
