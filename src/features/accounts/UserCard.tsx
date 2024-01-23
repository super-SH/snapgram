import { AccountType } from "@/types/collection";
import { Link } from "react-router-dom";
import FollowButton from "../follow/FollowButton";
import { useFollowers } from "../follow/useFollowers";
import { formatCount } from "@/lib/utils";

type UserCardProps = {
  account: AccountType;
  showFollowerCounts?: boolean;
};

function UserCard({ account, showFollowerCounts = false }: UserCardProps) {
  const { data: { count: followingsCounts } = {} } = useFollowers(account.id);

  return (
    <li>
      <Link to={`/profile/${account.id}`} className="user-card">
        <img
          src={
            account.profileUrl
              ? account.profileUrl
              : "/assets/icons/profile-placeholder.svg"
          }
          alt="default profile"
          className="h-16 w-16 rounded-full object-cover  object-center"
        />
        <div className="flex flex-col items-center justify-center gap-1">
          <p className="small-medium text-light-2">{account.name}</p>
          <p className="subtle-semibold text-light-4">
            {showFollowerCounts && followingsCounts
              ? `Followed by ${formatCount(followingsCounts)} users`
              : `@${account.username}`}
          </p>
        </div>

        <FollowButton followToId={account.id} />
      </Link>
    </li>
  );
}

export default UserCard;
