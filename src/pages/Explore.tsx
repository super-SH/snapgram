import ExplorePosts from "@/features/posts/ExplorePosts";
import SearchPostInput from "@/features/posts/SearchPostInput";

function Explore() {
  return (
    <div className="explore-container">
      <div className="explore-inner_container">
        <SearchPostInput />
      </div>

      <ExplorePosts />
    </div>
  );
}

export default Explore;
