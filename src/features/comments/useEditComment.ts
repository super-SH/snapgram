import { editComment as editCommentApi } from "@/services/apiComment";
import { IUpdateComment } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useEditComment() {
  const queryClient = useQueryClient();
  const {
    mutate: editComment,
    isPending,
    error,
  } = useMutation({
    mutationFn: ({ commentId, commentText }: IUpdateComment) =>
      editCommentApi(commentId, commentText),
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ["post-comments", data.postId],
      });
    },
  });

  return { editComment, isPending, error };
}
