import { Loader } from "@/components/shared";
import { useAccounts } from "@/features/accounts/useAccounts";
import UserCardsContainer from "./UserCardsContainer";

function AllAccounts() {
  const { data, isFetching } = useAccounts();

  if (isFetching)
    <div className="flex-center h-full w-full">
      <Loader />
    </div>;

  return <UserCardsContainer accounts={data || []} />;
}

export default AllAccounts;
