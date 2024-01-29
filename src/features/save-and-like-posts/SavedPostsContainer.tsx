import GridPostList from "../../components/shared/GridPostList";
import { useSavedPosts } from "./useSavedPosts";
import { GridPostCardSkeleton } from "@/components/loaderSkeleton";

function SavedPostsContainer() {
  const { data: savedPosts, isFetching: isFetchingSavedPosts } =
    useSavedPosts();

  if (isFetchingSavedPosts)
    return (
      <div className="grid-container">
        <GridPostCardSkeleton />
        <GridPostCardSkeleton />
        <GridPostCardSkeleton />
        <GridPostCardSkeleton />
      </div>
    );

  return (
    <>
      <GridPostList posts={savedPosts || []} showStats={false} />
    </>
  );
}

export default SavedPostsContainer;
