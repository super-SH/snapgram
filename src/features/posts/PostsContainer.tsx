import PostCard from "./PostCard";
import { useInView } from "react-intersection-observer";
import { flattenPagesData } from "@/lib/utils";
import { useEffect } from "react";
import { useInfiniteFollowingPosts } from "./useInfiniteFollowingPosts";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { HomePostCardSkeleton } from "@/components/loaderSkeleton";

function PostsContainer() {
  const navigate = useNavigate();

  const { inView, ref } = useInView();
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetching: isFetchingPosts,
  } = useInfiniteFollowingPosts();

  useEffect(
    function () {
      if (inView) {
        fetchNextPage();
      }
    },
    [inView, fetchNextPage],
  );

  if (isFetchingPosts && !data)
    return (
      <div className="flex w-full flex-1 flex-col gap-8">
        <HomePostCardSkeleton />
        <HomePostCardSkeleton />
        <HomePostCardSkeleton />
      </div>
    );

  const posts = flattenPagesData(data?.pages || []);

  if (posts.length === 0 && !hasNextPage && !isFetchingPosts)
    return (
      <div className="flex-center h-full w-full flex-col items-center gap-4">
        <p className="text-light-4 ">
          No Post yet. Follow more people to get better experience.
        </p>
        <div className="flex gap-2">
          <Button
            className="shad-button_primary"
            onClick={() => navigate("/explore")}
          >
            Explore Posts
          </Button>
          <Button
            className="shad-button_primary"
            onClick={() => navigate("/all-accounts")}
          >
            Find Accounts
          </Button>
        </div>
      </div>
    );

  return (
    <>
      <ul className="flex w-full flex-1 flex-col gap-8">
        {posts?.map((post) => <PostCard key={post.id} post={post} />)}
      </ul>

      {!hasNextPage ? null : (
        <div ref={ref} className="flex w-full flex-1 flex-col gap-8">
          <HomePostCardSkeleton />
          <HomePostCardSkeleton />
          <HomePostCardSkeleton />
        </div>
      )}
    </>
  );
}

export default PostsContainer;
