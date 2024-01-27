import { useEditCommentContext } from "@/contexts/EditCommentContext";
import { getCommentById } from "@/services/apiComment";
import { useQuery } from "@tanstack/react-query";

export function useEdtingComment() {
  const { editingCommentId } = useEditCommentContext();

  const { data, isFetching, error } = useQuery({
    queryKey: ["comment", editingCommentId],
    queryFn: () => getCommentById(editingCommentId),
    enabled: !!editingCommentId,
  });

  return { data, isFetching, error };
}
