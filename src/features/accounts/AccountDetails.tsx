import { Loader } from "@/components/shared";
import { useAccountInfoById } from "./useAccountInfoById";
import { useAccountInfo } from "./useAccountInfo";
import FollowButton from "../follow/FollowButton";
import EditProfileButton from "./EditProfileButton";
import ProfileStats from "./ProfileStats";

function AccountDetails() {
  const { data, isFetching } = useAccountInfoById();
  const { data: currentlyLoggedAccount, isFetching: isFetchingCurrent } =
    useAccountInfo();

  if (isFetching || isFetchingCurrent || !data)
    return (
      <div className="flex-center h-full w-full">
        <Loader />
      </div>
    );

  const isCurrentUserProfile = currentlyLoggedAccount?.id === data?.id;

  return (
    <>
      <img
        src={
          data?.profileUrl
            ? data.profileUrl
            : "/assets/icons/profile-placeholder.svg"
        }
        alt={data?.profileImgName ? data.profileImgName : "default profile"}
        className="h-20 w-20 rounded-full object-cover object-center xl:h-36 xl:w-36"
      />

      <div className="flex w-full flex-col gap-4">
        <div className="flex flex-col items-center gap-4 xl:items-start">
          <div className="flex flex-col items-center justify-start gap-0.5 xl:items-start">
            <p className="text-3xl font-semibold text-white xl:text-4xl">
              {data?.name}
            </p>
            <p className="text-base text-light-3 xl:text-lg">
              @{data?.username}
            </p>
          </div>
          {isCurrentUserProfile ? (
            <EditProfileButton />
          ) : (
            <FollowButton followToId={data?.id} />
          )}
        </div>

        <ProfileStats />

        <p className="text-center xl:text-start ">{data?.bio}</p>
      </div>
    </>
  );
}

export default AccountDetails;
