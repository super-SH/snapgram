import SavedPostsContainer from "@/features/save-and-like-posts/SavedPostsContainer";

function SavedPosts() {
  return (
    <div className="saved-container">
      <div className="flex w-full max-w-5xl items-center justify-start gap-3">
        <img
          src="/assets/icons/bookmark.svg"
          alt="saved post icon"
          width={36}
          height={36}
        />
        <h2 className="h3-bold md:h2-bold text-left">Saved Posts</h2>
      </div>

      <SavedPostsContainer />
    </div>
  );
}

export default SavedPosts;
