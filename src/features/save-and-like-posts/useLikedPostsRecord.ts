import { getLikedPostsRecord } from "@/services/apiLikePost";
import { AccountType } from "@/types/collection";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export function useLikedPostsRecord() {
  const queryClient = useQueryClient();

  const account = queryClient.getQueryData<AccountType>(["account"]);
  const accountId = account?.id;

  const { data, isFetching, error } = useQuery({
    queryKey: ["liked-posts-record", accountId],
    queryFn: () => getLikedPostsRecord(accountId),
    enabled: !!accountId
  });

  return { data, isFetching, error };
}
