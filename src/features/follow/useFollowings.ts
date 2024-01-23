import { getFollowings } from "@/services/apiFollow";
import { useQuery } from "@tanstack/react-query";

export function useFollowings(accountId: number) {
  const { data, isFetching } = useQuery({
    queryKey: ["followings", accountId],
    queryFn: () => getFollowings(accountId),
    enabled: !!accountId,
  });

  return { data, isFetching };
}
