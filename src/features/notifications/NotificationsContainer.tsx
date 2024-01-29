import { useAllNotificationById } from "./useAllNotificationById";
import NotificationCard from "./NotificationCard";
import { NotificationSkeleton } from "@/components/loaderSkeleton";

function NotificationsContainer() {
  const { data, isFetching } = useAllNotificationById();

  if (isFetching) return <NotificationSkeleton />;

  if (data?.length === 0 && !isFetching)
    return (
      <div className=" h-full w-full items-center ">
        <p className="text-xl text-light-4 ">No notification</p>
      </div>
    );

  return (
    <ul className="flex w-full max-w-5xl flex-col">
      {data &&
        data.map((noti) => (
          <NotificationCard key={noti.id} notification={noti} />
        ))}
    </ul>
  );
}

export default NotificationsContainer;
