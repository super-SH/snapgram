import { getFollowingsRecord } from "@/services/apiFollow";
import { AccountType } from "@/types/collection";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export function useFollowingsRecord() {
  const queryClient = useQueryClient();

  const account = queryClient.getQueryData<AccountType>(["account"]);
  const accountId = account?.id;

  const { data, isFetching, error } = useQuery({
    queryKey: ["followings-record", accountId],
    queryFn: () => getFollowingsRecord(accountId),
    enabled: !!accountId,
  });

  return { data, isFetching, error };
}
