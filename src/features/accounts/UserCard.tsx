import { Button } from "@/components/ui/button";
import { AccountType } from "@/types/collection";

type UserCardProps = {
  account: AccountType;
  showFollowerCounts?: boolean;
};

function UserCard({ account, showFollowerCounts = false }: UserCardProps) {
  return (
    <li className="user-card">
      <img
        src={"/assets/icons/profile-placeholder.svg"}
        alt="default profile"
      />
      <div className="flex flex-col items-center justify-center gap-1">
        <p className="small-medium text-light-2">{account.name}</p>
        <p className="subtle-semibold text-light-4">
          {showFollowerCounts ? "Followed by 0 users" : `@${account.username}`}
        </p>
      </div>

      <Button className="shad-button_primary base-medium w-24 px-2 py-5">
        Follow
      </Button>
    </li>
  );
}

export default UserCard;