import { PostWithCreator } from "@/types/collection";
import { Link } from "react-router-dom";
import PostStats from "./PostStats";

type GridPostListProp = {
  posts: PostWithCreator[];
  showUserData?: boolean;
  showStats?: boolean;
};

function GridPostList({
  posts,
  showUserData = true,
  showStats = true,
}: GridPostListProp) {
  return (
    <ul className="grid-container">
      {posts.map((post) => (
        <li key={post.id} className="relative h-72 min-w-72">
          <Link to={`/posts/${post.id}`} className="grid-post_link">
            <img
              src={post.imageUrl || ""}
              alt={post.caption}
              className="h-full w-full object-cover"
            />
          </Link>

          <div className="grid-post_user">
            {!showUserData ? null : (
              <div className="flex flex-1 items-center justify-start gap-2">
                <img
                  src={`/assets/icons/profile-placeholder.svg`}
                  alt="post creator profile"
                  className="h-8 w-8 rounded-full"
                />
                <p className="line-clamp-1">{post.creator.name}</p>
              </div>
            )}

            {!showStats ? null : <PostStats post={post} />}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default GridPostList;
