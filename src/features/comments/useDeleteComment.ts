import { deleteComment as deleteCommentApi } from "@/services/apiComment";
import { useMutation } from "@tanstack/react-query";

export function useDeleteComment() {
  const {
    mutate: deleteComment,
    isPending,
    error,
  } = useMutation({
    mutationFn: (commentId: number) => deleteCommentApi(commentId),
    // Comments query will be invalidate during using ,so dont need to pass postId just to invalidate
  });

  return { deleteComment, isPending, error };
}
