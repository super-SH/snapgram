import PostsContainer from "@/features/posts/PostsContainer";

function Home() {
  return (
    <div className="flex flex-1">
      <div className="home-container">
        <div className="home-posts">
          <h2 className="h3-bold md:h2-bold w-full text-left">Home Feeds</h2>

          <PostsContainer />
        </div>
      </div>
    </div>
  );
}

export default Home;
