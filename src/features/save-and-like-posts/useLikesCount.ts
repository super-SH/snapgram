import { getLikesCountByPostId } from "@/services/apiLikePost";
import { useQuery } from "@tanstack/react-query";

export function useLikesCount(postId: number) {
  const { data, isFetching } = useQuery({
    queryKey: ["likes-count", postId],
    queryFn: () => getLikesCountByPostId(postId),
  });

  return { data, isFetching };
}
