import { multiFormatDateString } from "@/lib/utils";
import { ExtendedNotification } from "@/types/collection";
import { Link } from "react-router-dom";

type NotiCardProps = {
  notification: ExtendedNotification;
};

function NotificationCard({ notification }: NotiCardProps) {
  console.log(notification);

  return (
    <li className="flex items-center gap-2 border-b border-dark-4 py-3 md:py-4 lg:py-5">
      <img
        src={notification.triggerBy.profileUrl || ""}
        alt={notification.triggerBy.name || ""}
        className="h-6 w-6 rounded-full object-cover object-center md:h-8 md:w-8 xl:h-10 xl:w-10"
      />
      <div className="flex flex-col">
        {notification.type === "follow" && (
          <p className="small-medium md:base-regular">
            <Link
              className="small-semibild md:base-medium text-primary-500"
              to={`/profile/${notification.triggerBy.id}`}
            >
              {notification.triggerBy.name + " "}
            </Link>
            starts following you.
          </p>
        )}
        {notification.type === "like-post" && (
          <p className="small-medium md:base-regular">
            <Link
              className="small-semibild md:base-medium text-primary-500"
              to={`/profile/${notification.triggerBy.id}`}
            >
              {notification.triggerBy.name + " "}
            </Link>
            likes your
            <Link
              className="small-semibild md:base-medium text-primary-500"
              to={`/posts/${notification.postId.id}`}
            >
              {" "}
              post.
            </Link>
          </p>
        )}
        {notification.type === "comment-post" && (
          <p className="small-medium md:base-regular">
            <Link
              className="small-semibild md:base-medium text-primary-500"
              to={`/profile/${notification.triggerBy.id}`}
            >
              {notification.triggerBy.name + " "}
            </Link>
            comments on your
            <Link
              className="small-semibild md:base-medium text-primary-500"
              to={`/posts/${notification.postId.id}`}
            >
              {" "}
              post.
            </Link>
          </p>
        )}
        <p className="tiny-medium md:subtle-semibold text-light-4">
          {multiFormatDateString(notification.created_at)}
        </p>
      </div>
    </li>
  );
}

export default NotificationCard;
