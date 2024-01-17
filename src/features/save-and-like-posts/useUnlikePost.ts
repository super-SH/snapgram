import { unlikePost as unlikePostApi } from "@/services/apiLikePost";
import { AccountType } from "@/types/collection";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useUnlikePost() {
  const queryClient = useQueryClient();

  const account = queryClient.getQueryData<AccountType>(["account"]);
  const accountId = account?.id;

  const { mutate: unlikePost, isPending } = useMutation({
    mutationFn: (likedRecordId: number) => unlikePostApi(likedRecordId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["liked-posts", accountId] });
      queryClient.invalidateQueries({ queryKey: ["likes-count"] });
    },
  });

  return { unlikePost, isPending };
}
