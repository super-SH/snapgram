import { getAccount } from "@/services/apiAccount";
import { useQuery } from "@tanstack/react-query";

export function useAccountInfo() {
  const { data, isFetching } = useQuery({
    queryKey: ["account"],
    queryFn: () => getAccount(),
  });

  return { data, isFetching };
}
