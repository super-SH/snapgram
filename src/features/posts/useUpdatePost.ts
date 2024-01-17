import { updatePost as updatePostApi } from "@/services/apiPost";
import { IUpdatePost } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useUpdatePost() {
  const queryClient = useQueryClient();

  const { mutate: updatePost, isPending } = useMutation({
    mutationFn: (post: IUpdatePost) => updatePostApi(post),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });

  return { updatePost, isPending };
}
