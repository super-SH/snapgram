import { deletePost as deletePostApi } from "@/services/apiPost";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useDeletePost() {
  const queryClient = useQueryClient();

  const { mutate: deletePost, isPending } = useMutation({
    mutationFn: ({ postId, imageUrl }: { postId: number; imageUrl: string }) =>
      deletePostApi(postId, imageUrl),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });

  return { deletePost, isPending };
}
