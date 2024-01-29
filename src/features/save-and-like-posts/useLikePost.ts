import { likePost as likePostApi } from "@/services/apiLikePost";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAccountInfo } from "../accounts/useAccountInfo";

export function useLikePost() {
  const queryClient = useQueryClient();

  const { data: account } = useAccountInfo();
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
      queryClient.invalidateQueries({ queryKey: ["liked-posts", accountId] });
    },
  });

  return { likePost, isPending, error };
}
