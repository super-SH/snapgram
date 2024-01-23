import { AccountType } from "@/types/collection";
import UserCard from "./UserCard";

type UserCardsContainerProps = {
  accounts: AccountType[];
  showFollowerCounts?: boolean;
};

function UserCardsContainer({
  accounts,
  showFollowerCounts = false,
}: UserCardsContainerProps) {
  return (
    <ul className="user-cards-container">
      {accounts.map((account) => (
        <UserCard
          account={account}
          key={account.id}
          showFollowerCounts={showFollowerCounts}
        />
      ))}
    </ul>
  );
}

export default UserCardsContainer;
