import { getRecentPosts } from "@/services/apiPost";
import { useQuery } from "@tanstack/react-query";

export function useGetRecentPosts() {
  const { data, isFetching } = useQuery({
    queryKey: ["recent-posts"],
    queryFn: getRecentPosts,
  });

  return { data, isFetching };
}
