import { PostWithCreator } from "@/types/collection";
import { Link } from "react-router-dom";
import PostStats from "../../features/save-and-like-posts/PostStats";

type GridPostListProp = {
  posts: PostWithCreator[];
  showUserData?: boolean;
  showStats?: boolean;
  noPostMsg?: string;
};

function GridPostList({
  posts,
  showUserData = true,
  showStats = true,
  noPostMsg = "There is no post to show yet.",
}: GridPostListProp) {
  if (posts.length === 0)
    return (
      <div className="p-4 md:p-6 xl:p-8">
        <p className="text-center text-base text-light-4 md:text-lg lg:text-2xl">
          {noPostMsg}
        </p>
      </div>
    );

  return (
    <ul className="grid-container">
      {posts.map((post) => (
        <li
          key={post.id}
          className="relative h-64 min-w-60 xs:h-72 xs:min-w-72"
        >
          <Link to={`/posts/${post.id}`} className="grid-post_link">
            <img
              src={post.imageUrl || ""}
              alt={post.caption}
              className="h-full w-full object-cover"
            />
          </Link>

          <div className="grid-post_user">
            {!showUserData ? null : (
              <Link
                className="flex flex-1 items-center justify-start gap-2"
                to={`/profile/${post.creator.id}`}
              >
                <img
                  src={
                    post.creator.profileUrl
                      ? post.creator.profileUrl
                      : `/assets/icons/profile-placeholder.svg`
                  }
                  alt="post creator profile"
                  className="h-8 w-8 rounded-full object-cover  object-center"
                />
                <p className="line-clamp-1">{post.creator.name}</p>
              </Link>
            )}

            {!showStats ? null : <PostStats post={post} />}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default GridPostList;
