import { POSTS_PER_QUERY } from "@/constants";
import { getPosts } from "@/services/apiPost";
import { useInfiniteQuery } from "@tanstack/react-query";

export function useInfinitePosts() {
  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ["posts"],
    queryFn: ({ pageParam }) => getPosts(pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage, _, lastPageParam) => {
      if (lastPage && lastPage.length < POSTS_PER_QUERY) return null;

      return lastPageParam + 1;
    },
    staleTime: 0,
    refetchOnMount: true,
  });

  return { data, fetchNextPage, hasNextPage };
}
