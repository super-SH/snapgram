import { removeSavedPost as removeSavedPostApi } from "@/services/apiSavePost";
import { AccountType } from "@/types/collection";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useRemoveSavedPost() {
  const queryClient = useQueryClient();

  const account = queryClient.getQueryData<AccountType>(["account"]);
  const accountId = account?.id;

  const { mutate: removeSavedPost, isPending } = useMutation({
    mutationFn: (savedRecordId: number) => removeSavedPostApi(savedRecordId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["saved-posts-record", accountId],
      });
    },
  });

  return { removeSavedPost, isPending };
}
