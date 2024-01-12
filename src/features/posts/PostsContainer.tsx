import PostCard from "./PostCard";
import { useGetRecentPosts } from "./useGetRecentPosts";

function PostsContainer() {
  const { data: posts, isFetching } = useGetRecentPosts();

  if (isFetching) return "loading";

  return (
    <ul className="flex w-full flex-1 flex-col gap-8">
      {posts?.map((post) => <PostCard key={post.id} post={post} />)}
    </ul>
  );
}

export default PostsContainer;
