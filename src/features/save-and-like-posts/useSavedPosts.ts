import { useQuery } from "@tanstack/react-query";
import { getSavedPostOfCurrentAccount } from "@/services/apiSavePost";
import { useAccountInfo } from "../accounts/useAccountInfo";

export function useSavedPosts() {
  const { data: account } = useAccountInfo();
  const accountId = account?.id;

  const { data, isFetching, error } = useQuery({
    queryKey: ["saved-posts", accountId],
    queryFn: () => getSavedPostOfCurrentAccount(accountId),
    enabled: !!accountId,
  });

  return { data, isFetching, error };
}
