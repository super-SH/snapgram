import { flattenPagesData } from "@/lib/utils";
import { useInfinitePosts } from "./useInfinitePosts";
import GridPostList from "./GridPostList";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

function ExplorePosts() {
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

  // console.log(data);
  if (!data?.pages) return "loading";

  const showExplorePosts = flattenPagesData(data?.pages);

  console.log(showExplorePosts);
  console.log(hasNextPage);

  return (
    <>
      <div className="flex-between mb-7 mt-16 w-full max-w-5xl">
        <h3 className="body-bold md:h3-bold">Popular Today</h3>

        <div className="flex-center cursor-pointer gap-3 rounded-xl bg-dark-3 px-4 py-2">
          <p className="small-medium md:base-medium text-light-2">All</p>
          <img
            src="/assets/icons/filter.svg"
            width={22}
            height={22}
            alt="filter"
          />
        </div>
      </div>

      <div className="flex w-full max-w-5xl flex-wrap gap-9">
        <GridPostList posts={showExplorePosts} />
      </div>

      {!hasNextPage ? null : (
        <div ref={ref} className="mt-12">
          Loading...
        </div>
      )}
    </>
  );
}

export default ExplorePosts;
