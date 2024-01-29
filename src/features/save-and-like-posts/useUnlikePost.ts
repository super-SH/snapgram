import { unlikePost as unlikePostApi } from "@/services/apiLikePost";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAccountInfo } from "../accounts/useAccountInfo";

export function useUnlikePost() {
  const queryClient = useQueryClient();

  const { data: account } = useAccountInfo();
  const accountId = account?.id;

  const { mutate: unlikePost, isPending } = useMutation({
    mutationFn: (likedRecordId: number) => unlikePostApi(likedRecordId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["liked-posts-record", accountId],
      });
      queryClient.invalidateQueries({ queryKey: ["likes-count"] });
      queryClient.invalidateQueries({ queryKey: ["liked-posts", accountId] });
    },
  });

  return { unlikePost, isPending };
}
