import { createComment as createCommentApi } from "@/services/apiComment";
import { INewComment } from "@/types";
import { useMutation } from "@tanstack/react-query";

export function useCreateComment() {
  const {
    mutate: createComment,
    isPending,
    error,
  } = useMutation({
    mutationFn: (newComment: INewComment) => createCommentApi(newComment),
  });

  return { createComment, isPending, error };
}
