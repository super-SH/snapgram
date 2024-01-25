import { Loader } from "@/components/shared";
import PostCard from "./PostCard";
import { useInView } from "react-intersection-observer";
import { flattenPagesData } from "@/lib/utils";
import { useEffect } from "react";
import { useInfiniteFollowingPosts } from "./useInfiniteFollowingPosts";
import { useAccountInfo } from "../accounts/useAccountInfo";
import { useFollowingsRecord } from "../follow/useFollowingsRecord";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

function PostsContainer() {
  const {} = useAccountInfo();
  const {} = useFollowingsRecord();

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

  if (isFetchingPosts)
    return (
      <div className="flex-center h-full w-full">
        <Loader />
      </div>
    );

  const posts = flattenPagesData(data?.pages || []);

  if (posts.length === 0 && !hasNextPage && !isFetchingPosts)
    return (
      <div className="flex-center h-full w-full flex-col items-center gap-4">
        <p className="text-light-4 ">
          No Post yet. Follow more people to get better experience.
        </p>
        <Button
          className="shad-button_primary"
          onClick={() => navigate("/explore")}
        >
          Explore Posts
        </Button>
      </div>
    );

  return (
    <>
      <ul className="flex w-full flex-1 flex-col gap-8">
        {posts?.map((post) => <PostCard key={post.id} post={post} />)}
      </ul>

      {!hasNextPage ? null : (
        <div ref={ref} className="mt-12">
          <Loader />
        </div>
      )}
    </>
  );
}

export default PostsContainer;
