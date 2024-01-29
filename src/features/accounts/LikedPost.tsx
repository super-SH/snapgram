import { useLikedPosts } from "../save-and-like-posts/useLikedPosts";
import GridPostList from "@/components/shared/GridPostList";
import { GridPostCardSkeleton } from "@/components/loaderSkeleton";

function LikedPost() {
  const { data, isFetching } = useLikedPosts();

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
      posts={data || []}
      showStats={false}
      noPostMsg="This account has no liked post."
    />
  );
}

export default LikedPost;
