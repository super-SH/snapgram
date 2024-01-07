import { createPost as createPostApi } from "@/services/apiPost";
import { INewPost } from "@/types";
import { useMutation } from "@tanstack/react-query";

export function useCreatePost() {
  const { mutate: createPost, isPending } = useMutation({
    mutationFn: (post: INewPost) => createPostApi(post),
  });

  return { createPost, isPending };
}
