import { createPost as createPostApi } from "@/services/apiPost";
import { INewPost } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useCreatePost() {
  const queryClient = useQueryClient();

  const { mutate: createPost, isPending } = useMutation({
    mutationFn: (post: INewPost) => createPostApi(post),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["recent-posts"] });
    },
  });

  return { createPost, isPending };
}
