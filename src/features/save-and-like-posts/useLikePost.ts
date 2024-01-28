import { likePost as likePostApi } from "@/services/apiLikePost";
import { AccountType } from "@/types/collection";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useLikePost() {
  const queryClient = useQueryClient();

  const account = queryClient.getQueryData<AccountType>(["account"]);
  const accountId = account?.id;

  const {
    mutate: likePost,
    isPending,
    error,
  } = useMutation({
    mutationFn: ({
      accountId,
      postId,
      creatorId,
    }: {
      accountId: number;
      postId: number;
      creatorId: number;
    }) => likePostApi(accountId, postId, creatorId),
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ["liked-posts-record", accountId],
      });
      queryClient.invalidateQueries({ queryKey: ["likes-count", data.postId] });
    },
  });

  return { likePost, isPending, error };
}
