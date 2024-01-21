import { useAccounts } from "@/features/accounts/useAccounts";
import UserCardsContainer from "./UserCardsContainer";
import { Loader } from "@/components/shared";

function TopCreators() {
  // Change these data after implementing follow feature
  const { data, isFetching } = useAccounts();

  if (isFetching)
    <div className="flex-center h-full w-full">
      <Loader />
    </div>;

  return (
    <>
      <UserCardsContainer accounts={data || []} />
    </>
  );
}

export default TopCreators;
