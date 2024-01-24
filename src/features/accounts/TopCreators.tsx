import { useAccounts } from "@/features/accounts/useAccounts";
import UserCardsContainer from "./UserCardsContainer";
import { Loader } from "@/components/shared";
import { useAccountInfo } from "./useAccountInfo";

function TopCreators() {
  // Need to call this hook because
  const {} = useAccountInfo();
  // accountId is undefined on initial render
  // useAccounts will not trigger if there is no accountId

  // so that , after calling this useAccountInfo , account data will get to the cache and accountId will no longer undefined

  // This doesnt need for signin or signup , since account cache will set automatically
  // But , need for cache are being clear by page reload

  const { data, isFetching } = useAccounts();

  if (isFetching)
    return (
      <div className="flex-center h-full w-full">
        <Loader />
      </div>
    );

  return (
    <>{data && <UserCardsContainer accounts={data} showFollowerCounts />}</>
  );
}

export default TopCreators;
