import { AccountType } from "@/types/collection";
import UserCard from "./UserCard";

type UserCardsContainerProps = {
  accounts: AccountType[];
};

function UserCardsContainer({ accounts }: UserCardsContainerProps) {
  return (
    <ul className="user-cards-container">
      {accounts.map((account) => (
        <UserCard account={account} key={account.id} />
      ))}
    </ul>
  );
}

export default UserCardsContainer;
