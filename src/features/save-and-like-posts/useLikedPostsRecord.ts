import { getLikedPostsRecord } from "@/services/apiLikePost";
import { useQuery } from "@tanstack/react-query";
import { useAccountInfo } from "../accounts/useAccountInfo";

export function useLikedPostsRecord() {
  const { data: account } = useAccountInfo();
  const accountId = account?.id;

  const { data, isFetching, error } = useQuery({
    queryKey: ["liked-posts-record", accountId],
    queryFn: () => getLikedPostsRecord(accountId),
    enabled: !!accountId,
  });

  return { data, isFetching, error };
}
