import { useAccounts } from "@/features/accounts/useAccounts";
import UserCardsContainer from "./UserCardsContainer";
import { UserCardSkeleton } from "@/components/loaderSkeleton";

function TopCreators() {
  const { data, isFetching } = useAccounts();

  if (isFetching)
    return (
      <div className="user-cards-container">
        <UserCardSkeleton />
        <UserCardSkeleton />
        <UserCardSkeleton />
        <UserCardSkeleton />
      </div>
    );

  return (
    <>{data && <UserCardsContainer accounts={data} showFollowerCounts />}</>
  );
}

export default TopCreators;
