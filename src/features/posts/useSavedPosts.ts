import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useAccountInfo } from "../accounts/useAccountInfo";
import { getSavedPostOfCurrentAccount } from "@/services/apiPost";
import { AccountType } from "@/types/collection";

export function useSavedPosts() {
  // const { data: accountData } = useAccountInfo();
  // const accountId = accountData?.id;

  const queryClient = useQueryClient();

  const account = queryClient.getQueryData<AccountType>(["account"]);
  const accountId = account?.id;

  const { data, isFetching, error } = useQuery({
    queryKey: ["saved-posts", accountId],
    queryFn: () => getSavedPostOfCurrentAccount(accountId),
  });

  return { data, isFetching, error };
}
