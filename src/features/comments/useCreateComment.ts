import { createComment as createCommentApi } from "@/services/apiComment";
import { INewComment } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useCreateComment() {
  const queryClient = useQueryClient();

  const {
    mutate: createComment,
    isPending,
    error,
  } = useMutation({
    mutationFn: (newComment: INewComment) => createCommentApi(newComment),
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ["post-comments", data.postId],
      });
    },
  });

  return { createComment, isPending, error };
}
