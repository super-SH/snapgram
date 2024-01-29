import { removeSavedPost as removeSavedPostApi } from "@/services/apiSavePost";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAccountInfo } from "../accounts/useAccountInfo";

export function useRemoveSavedPost() {
  const queryClient = useQueryClient();

  const { data: account } = useAccountInfo();
  const accountId = account?.id;

  const { mutate: removeSavedPost, isPending } = useMutation({
    mutationFn: (savedRecordId: number) => removeSavedPostApi(savedRecordId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["saved-posts-record", accountId],
      });
      queryClient.invalidateQueries({
        queryKey: ["saved-posts", accountId],
      });
    },
  });

  return { removeSavedPost, isPending };
}
