import { useQuery } from "@tanstack/react-query";
import { getAccounts } from "../../services/apiAccount";
import { useAccountInfo } from "./useAccountInfo";

export function useAccounts() {
  const { data: account } = useAccountInfo();
  const accountId = account?.id;

  const { data, error, isFetching } = useQuery({
    queryKey: ["accounts"],
    queryFn: () => getAccounts(accountId),
    enabled: !!accountId,
  });

  return { data, isFetching, error };
}
