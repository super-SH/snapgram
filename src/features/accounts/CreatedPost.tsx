import GridPostList from "@/components/shared/GridPostList";
import { useCreatedPosts } from "../posts/useCreatedPosts";
import { GridPostCardSkeleton } from "@/components/loaderSkeleton";

function CreatedPost() {
  const { data, isFetching } = useCreatedPosts();

  if (isFetching)
    return (
      <div className="grid-container">
        <GridPostCardSkeleton />
        <GridPostCardSkeleton />
        <GridPostCardSkeleton />
        <GridPostCardSkeleton />
      </div>
    );

  return (
    <GridPostList
      posts={data?.posts || []}
      showStats={false}
      showUserData={false}
      noPostMsg="This account hasn't created a post yet."
    />
  );
}

export default CreatedPost;
