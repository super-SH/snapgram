import { Loader } from "@/components/shared";
import GridPostList from "../../components/shared/GridPostList";
import { useSavedPosts } from "./useSavedPosts";

function SavedPostsContainer() {
  const { data: savedPosts, isFetching: isFetchingSavedPosts } =
    useSavedPosts();

  if (isFetchingSavedPosts)
    return (
      <div className="flex-center h-full w-full">
        <Loader />
      </div>
    );

  return (
    <>
      <GridPostList posts={savedPosts || []} showStats={false} />
    </>
  );
}

export default SavedPostsContainer;
