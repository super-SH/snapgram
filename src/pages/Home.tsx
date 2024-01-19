import TopCreators from "@/features/accounts/TopCreators";
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

      <div className="home-creators">
        <h3 className="h3-bold w-full text-left">Top Creators</h3>

        <TopCreators />
      </div>
    </div>
  );
}

export default Home;
