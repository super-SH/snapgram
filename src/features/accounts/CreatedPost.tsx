import GridPostList from "@/components/shared/GridPostList";
import { useCreatedPosts } from "../posts/useCreatedPosts";
import { Loader } from "@/components/shared";

function CreatedPost() {
  const { data, isFetching } = useCreatedPosts();

  if (isFetching)
    return (
      <div className="flex-center w-full">
        <Loader />
      </div>
    );

  return (
    <GridPostList
      posts={data || []}
      showStats={false}
      showUserData={false}
      noPostMsg="This account hasn't created a post yet."
    />
  );
}

export default CreatedPost;
