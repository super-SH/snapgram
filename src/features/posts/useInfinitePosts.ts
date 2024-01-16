import { getPosts } from "@/services/apiPost";
import { PostWithCreator } from "@/types/collection";
import { useInfiniteQuery } from "@tanstack/react-query";

export function useInfinitePosts() {
  const { data, fetchNextPage } = useInfiniteQuery({
    queryKey: ["posts"],
    queryFn: ({ pageParam }) => getPosts(pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages, lastPageParam, allPageParams) => {
      console.log(lastPage);
      return lastPageParam + 1;
    },
  });

  return { data, fetchNextPage };
}
