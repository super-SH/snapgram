import { POSTS_PER_QUERY } from "@/constants";
import { getFollowingPosts } from "@/services/apiPost";
import { AccountType, FollowRecord } from "@/types/collection";
import { useInfiniteQuery, useQueryClient } from "@tanstack/react-query";

export function useInfiniteFollowingPosts() {
  const queryClient = useQueryClient();

  // Get logged accountId from cache
  const account = queryClient.getQueryData<AccountType>(["account"]);
  const accountId = account?.id;

  // get following accounts of currently log in account
  const followingsData = queryClient.getQueryData<FollowRecord[]>([
    "followings-record",
    accountId,
  ]);

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
    enabled: !!accountId && followings?.length !== 0,
  });

  return { data, fetchNextPage, hasNextPage, isFetching };
}
