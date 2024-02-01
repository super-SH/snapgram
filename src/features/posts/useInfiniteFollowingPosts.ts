import { POSTS_PER_QUERY } from "@/constants";
import { getFollowingPosts } from "@/services/apiPost";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useAccountInfo } from "../accounts/useAccountInfo";
import { useFollowingsRecord } from "../follow/useFollowingsRecord";

export function useInfiniteFollowingPosts() {
  // Get logged accountId
  const { data: account } = useAccountInfo();
  const accountId = account?.id;

  // get following accounts of currently log in account
  const { data: followingsData } = useFollowingsRecord();

  // push all followtoId ,which is  followings of current account. + current acoountId
  // because user will also see their own posts
  const followings: number[] =
    followingsData
      ?.map((data) => data.followToId)
      .filter((id) => id !== null)
      .map(Number) || [];

  const { data, fetchNextPage, hasNextPage, isFetching } = useInfiniteQuery({
    queryKey: ["following-posts", accountId],
    queryFn: ({ pageParam }) =>
      getFollowingPosts(pageParam, [...followings, accountId] || []),
    initialPageParam: 0,
    getNextPageParam: (lastPage, _, lastPageParam) => {
      if (lastPage && lastPage.length < POSTS_PER_QUERY) return null;

      return lastPageParam + 1;
    },
    enabled: !!accountId && followings.length !== 0,
    refetchOnMount: "always",
  });

  return { data, fetchNextPage, hasNextPage, isFetching };
}
