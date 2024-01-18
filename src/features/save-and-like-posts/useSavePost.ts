import { savePost as savePostApi } from "@/services/apiSavePost";
import { AccountType } from "@/types/collection";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useSavePost() {
  const queryClient = useQueryClient();

  const account = queryClient.getQueryData<AccountType>(["account"]);
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
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ["saved-posts-record", accountId],
      }),
  });

  return { savePost, isPending, error };
}
