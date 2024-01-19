import { useQuery } from "@tanstack/react-query";
import { getAccounts } from "./apiAccount";

export function useAccounts() {
  const { data, error, isFetching } = useQuery({
    queryKey: ["accounts"],
    queryFn: () => getAccounts(),
  });

  return { data, isFetching, error };
}
