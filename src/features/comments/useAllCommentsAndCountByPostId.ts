import { getAllCommentsAndCountByPostId } from "@/services/apiComment";
import { useQuery } from "@tanstack/react-query";

export function useAllCommentsAndCountByPostId(postId: number) {
  const { data, isFetching, error } = useQuery({
    queryKey: ["post-comments", postId],
    queryFn: () => getAllCommentsAndCountByPostId(postId),
  });

  return { data, isFetching, error };
}
