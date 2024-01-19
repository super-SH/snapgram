import { Button } from "@/components/ui/button";
import { AccountType } from "@/types/collection";
import { Link } from "react-router-dom";
import FollowButton from "./FollowButton";

type UserCardProps = {
  account: AccountType;
  showFollowerCounts?: boolean;
};

function UserCard({ account, showFollowerCounts = false }: UserCardProps) {
  return (
    <li>
      <Link to={`/profile/${account.id}`} className="user-card">
        <img
          src={"/assets/icons/profile-placeholder.svg"}
          alt="default profile"
        />
        <div className="flex flex-col items-center justify-center gap-1">
          <p className="small-medium text-light-2">{account.name}</p>
          <p className="subtle-semibold text-light-4">
            {showFollowerCounts
              ? "Followed by 0 users"
              : `@${account.username}`}
          </p>
        </div>

        <FollowButton />
      </Link>
    </li>
  );
}

export default UserCard;
