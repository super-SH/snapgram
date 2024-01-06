import CreatePostForm from "@/features/posts/CreatePostForm";

function CreatePost() {
  return (
    <div className="flex flex-1">
      <div className="common-container">
        <div className="flex w-full max-w-5xl items-start justify-start gap-3">
          <img
            src="/assets/icons/add-post.svg"
            alt="gallery icon with the plus sign on the top right corner "
          />
          <h2 className="h3-bold md:h2-bold text-left">Create Post</h2>
        </div>

        <CreatePostForm />
      </div>
    </div>
  );
}

export default CreatePost;
