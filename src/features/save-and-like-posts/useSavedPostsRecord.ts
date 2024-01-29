import { useQuery } from "@tanstack/react-query";
import { getSavedPostRecordOfCurrentAccount } from "@/services/apiSavePost";
import { useAccountInfo } from "../accounts/useAccountInfo";

export function useSavedPostsRecord() {
  const { data: account } = useAccountInfo();
  const accountId = account?.id;

  const { data, isFetching, error } = useQuery({
    queryKey: ["saved-posts-record", accountId],
    queryFn: () => getSavedPostRecordOfCurrentAccount(accountId),
    enabled: !!accountId,
  });

  return { data, isFetching, error };
}
