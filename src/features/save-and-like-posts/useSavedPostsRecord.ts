import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useAccountInfo } from "../accounts/useAccountInfo";
import { getSavedPostRecordOfCurrentAccount } from "@/services/apiSavePost";
import { AccountType } from "@/types/collection";

export function useSavedPostsRecord() {
  const queryClient = useQueryClient();

  const account = queryClient.getQueryData<AccountType>(["account"]);
  const accountId = account?.id;

  const { data, isFetching, error } = useQuery({
    queryKey: ["saved-posts-record", accountId],
    queryFn: () => getSavedPostRecordOfCurrentAccount(accountId),
  });

  return { data, isFetching, error };
}
