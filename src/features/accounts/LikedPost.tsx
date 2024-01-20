import { Loader } from "@/components/shared";
import { useLikedPosts } from "../save-and-like-posts/useLikedPosts";
import GridPostList from "@/components/shared/GridPostList";

function LikedPost() {
  const { data, isFetching } = useLikedPosts();

  if (isFetching)
    <div className="flex-center w-full">
      <Loader />
    </div>;

  return (
    <GridPostList
      posts={data || []}
      showStats={false}
      noPostMsg="This account has no liked post."
    />
  );
}

export default LikedPost;
