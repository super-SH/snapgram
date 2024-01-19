import { getAccount } from "@/services/apiAccount";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export function useAccountInfoById() {
  const { accountId } = useParams();

  const { data, isFetching } = useQuery({
    queryKey: ["account", accountId],
    queryFn: () => getAccount(Number(accountId)),
  });

  return { data, isFetching };
}
