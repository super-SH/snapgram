import { flattenPagesData } from "@/lib/utils";
import { useInfinitePosts } from "./useInfinitePosts";
import GridPostList from "./GridPostList";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { Loader } from "@/components/shared";
import SearchPostInput from "./SearchPostInput";
import { useSearchPosts } from "./useSearchPosts";
import { PostWithCreator } from "@/types/collection";
import { useSearchParams } from "react-router-dom";

function ExplorePosts() {
  const [searchParams] = useSearchParams();
  const { inView, ref } = useInView();
  const { data, fetchNextPage, hasNextPage } = useInfinitePosts();
  const { data: searchPosts, isFetching: isFetchingSearchPost } =
    useSearchPosts();

  const isSearchValue = Boolean(searchParams.get("search"));

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

  const showExplorePosts = flattenPagesData(data?.pages);

  // console.log(searchPosts);
  // console.log(showExplorePosts);

  return (
    <>
      <div className="explore-inner_container">
        <SearchPostInput />
      </div>

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
        {isSearchValue ? (
          <SearchResult
            searchPosts={searchPosts || []}
            isSearchFetching={isFetchingSearchPost}
          />
        ) : (
          <GridPostList posts={showExplorePosts} />
        )}
      </div>

      {!hasNextPage ? null : (
        <div ref={ref} className="mt-12">
          <Loader />
        </div>
      )}
    </>
  );
}

type SearchResultProps = {
  isSearchFetching: boolean;
  searchPosts: PostWithCreator[];
};

function SearchResult({ isSearchFetching, searchPosts }: SearchResultProps) {
  if (isSearchFetching) {
    return <Loader />;
  } else if (searchPosts && searchPosts.length > 0) {
    return <GridPostList posts={searchPosts} />;
  } else {
    return (
      <p className="mt-10 w-full text-center text-light-4">No results found</p>
    );
  }
}

export default ExplorePosts;
