import { Button } from "@/components/ui/button";
import { useFollowingsRecord } from "./useFollowingsRecord";
import { useFollowAccount } from "./useFollowAccount";
import { AccountType } from "@/types/collection";
import { useQueryClient } from "@tanstack/react-query";
import { useUnfollowAccount } from "./useUnfollowAccount";
import { Loader } from "@/components/shared";

type FollowButtonProps = { followToId: number };

function FollowButton({ followToId }: FollowButtonProps) {
  const queryClient = useQueryClient();

  const account = queryClient.getQueryData<AccountType>(["account"]);
  const accountId = account?.id;

  const { data: followingsRecords } = useFollowingsRecord();
  const { mutate: followAccount, isPending: isFollowingAccount } =
    useFollowAccount();
  const { mutate: unfollowAccount, isPending: isUnfollowingAccount } =
    useUnfollowAccount();

  const followRecordId = followingsRecords?.find(
    (record) => record.followToId === followToId,
  )?.id;

  const isAlreadyFollowed = Boolean(followRecordId);

  function handleFollow(e: React.MouseEvent) {
    e.preventDefault();
    if (!accountId) return;

    if (isAlreadyFollowed) {
      if (!followRecordId) return;
      unfollowAccount(followRecordId);
    } else {
      followAccount({ followToId, followedById: accountId });
    }
  }

  return (
    <Button
      className={`${
        isAlreadyFollowed
          ? " text-white"
          : " border-primary-500 bg-primary-500 text-light-1 hover:bg-primary-500/90"
      } base-medium w-24 border px-2 py-5 text-center text-base`}
      onClick={handleFollow}
      disabled={isFollowingAccount || isUnfollowingAccount}
    >
      {isFollowingAccount || isUnfollowingAccount ? (
        <Loader />
      ) : isAlreadyFollowed ? (
        "Unfollow"
      ) : (
        "Follow"
      )}
    </Button>
  );
}

export default FollowButton;
