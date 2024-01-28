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
    mutationFn: ({
      newComment,
      postCreatorId,
    }: {
      newComment: INewComment;
      postCreatorId: number;
    }) => createCommentApi(newComment, postCreatorId),
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ["post-comments", data.postId],
      });
    },
  });

  return { createComment, isPending, error };
}
