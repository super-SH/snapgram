import { Link } from "react-router-dom";
import { useAccountInfo } from "./useAccountInfo";
import { SmallProfileSkeleton } from "@/components/loaderSkeleton";

function SmallProfileCard() {
  const { data, isFetching } = useAccountInfo();

  if (isFetching) return <SmallProfileSkeleton />;

  return (
    <>
      <Link
        to={`/profile/${data?.id}`}
        className="hidden items-center gap-3 md:flex"
      >
        <img
          className="h-12 w-12 rounded-full object-cover  object-center"
          src={
            data?.profileUrl
              ? data.profileUrl
              : `/assets/icons/profile-placeholder.svg`
          }
          alt="profile"
        />

        <div className="flex flex-col">
          <p className="body-bold">{data?.name}</p>
          <p className="small-regular text-light-3">@{data?.username}</p>
        </div>
      </Link>

      <Link to={`/profile/${data?.id}`} className="md:hidden">
        <img
          className="h-7 w-7 rounded-full object-cover object-center"
          src={
            data?.profileUrl
              ? data.profileUrl
              : "/assets/icons/profile-placeholder.svg"
          }
          alt="profile"
        />
      </Link>
    </>
  );
}

export default SmallProfileCard;
