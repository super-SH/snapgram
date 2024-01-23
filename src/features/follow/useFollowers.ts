import { getFollowers } from "@/services/apiFollow";
import { useQuery } from "@tanstack/react-query";

export function useFollowers(accountId: number) {
  const { data, isFetching } = useQuery({
    queryKey: ["followers", accountId],
    queryFn: () => getFollowers(accountId),
    enabled: !!accountId,
  });

  return { data, isFetching };
}
