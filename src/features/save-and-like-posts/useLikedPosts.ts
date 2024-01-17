import { useQuery, useQueryClient } from "@tanstack/react-query";
import { AccountType } from "@/types/collection";
import { getLikedPostOfCurrentAccount } from "@/services/apiLikePost";

export function useLikedPosts() {
  const queryClient = useQueryClient();

  const account = queryClient.getQueryData<AccountType>(["account"]);
  const accountId = account?.id;

  const { data, isFetching, error } = useQuery({
    queryKey: ["liked-posts", accountId],
    queryFn: () => getLikedPostOfCurrentAccount(accountId),
  });

  return { data, isFetching, error };
}
