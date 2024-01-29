import { savePost as savePostApi } from "@/services/apiSavePost";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAccountInfo } from "../accounts/useAccountInfo";

export function useSavePost() {
  const queryClient = useQueryClient();

  const { data: account } = useAccountInfo();
  const accountId = account?.id;

  const {
    mutate: savePost,
    isPending,
    error,
  } = useMutation({
    mutationFn: ({
      accountId,
      postId,
    }: {
      accountId: number;
      postId: number;
    }) => savePostApi(accountId, postId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["saved-posts-record", accountId],
      });
      queryClient.invalidateQueries({
        queryKey: ["saved-posts", accountId],
      });
    },
  });

  return { savePost, isPending, error };
}
