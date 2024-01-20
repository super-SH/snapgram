import { Loader } from "@/components/shared";
import { useAccountInfoById } from "./useAccountInfoById";
import { useAccountInfo } from "./useAccountInfo";
import FollowButton from "./FollowButton";
import EditProfileButton from "./EditProfileButton";

function AccountDetails() {
  const { data, isFetching } = useAccountInfoById();
  const { data: currentlyLoggedAccount, isFetching: isFetchingCurrent } =
    useAccountInfo();

  if (isFetching || isFetchingCurrent)
    return (
      <div className="flex-center h-full w-full">
        <Loader />
      </div>
    );

  const isCurrentUserProfile = currentlyLoggedAccount?.id === data?.id;

  return (
    <>
      <img
        src={"/assets/icons/profile-placeholder.svg"}
        alt={"default profile"}
        className="h-20 w-20 rounded-full xl:h-36 xl:w-36"
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
          {isCurrentUserProfile ? <EditProfileButton /> : <FollowButton />}
        </div>

        <div className="flex justify-center gap-4 xl:justify-start">
          <div>
            <p className="text-xl font-medium text-primary-500">0</p>
            <p className="text-lg font-medium">Posts</p>
          </div>
          <div>
            <p className="text-xl font-medium text-primary-500">0</p>
            <p className="text-lg font-medium">Followers</p>
          </div>
          <div>
            <p className="text-xl font-medium text-primary-500">0</p>
            <p className="text-lg font-medium">Following</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AccountDetails;
