import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getAccounts } from "../../services/apiAccount";
import { AccountType } from "@/types/collection";

export function useAccounts() {
  const queryClient = useQueryClient();

  const account = queryClient.getQueryData<AccountType>(["account"]);
  const accountId = account?.id;

  const { data, error, isFetching } = useQuery({
    queryKey: ["accounts"],
    queryFn: () => getAccounts(accountId),
    enabled: !!accountId,
  });

  return { data, isFetching, error };
}
