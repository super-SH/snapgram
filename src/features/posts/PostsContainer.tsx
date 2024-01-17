import { Loader } from "@/components/shared";
import PostCard from "./PostCard";
import { useInfinitePosts } from "./useInfinitePosts";
import { useInView } from "react-intersection-observer";
import { flattenPagesData } from "@/lib/utils";
import { useEffect } from "react";

function PostsContainer() {
  const { inView, ref } = useInView();
  const { data, fetchNextPage, hasNextPage } = useInfinitePosts();

  useEffect(
    function () {
      if (inView) {
        fetchNextPage();
      }
    },
    [inView, fetchNextPage],
  );

  if (!data?.pages)
    return (
      <div className="flex-center h-full w-full">
        <Loader />
      </div>
    );

  const posts = flattenPagesData(data?.pages);

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
