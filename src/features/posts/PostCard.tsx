import { PostWithCreator } from "@/types/collection";
import { Link } from "react-router-dom";
import PostStats from "../save-and-like-posts/PostStats";
import PostCreatorDetails from "./PostCreatorDetails";
import EditPostButton from "./EditPostButton";

type PostCardProps = {
  post: PostWithCreator;
};

function PostCard({ post }: PostCardProps) {
  return (
    <li className="post-card flex flex-col gap-3">
      <div className="flex-between ">
        <PostCreatorDetails
          creator={post.creator}
          created_at={post.created_at}
          location={post.location}
        />

        <EditPostButton postId={post.id} creatorId={post.creator.accountId} />
      </div>

      <Link to={`posts/${post.id}`}>
        <div className="small-medium lg:base-medium py-3">
          <p className="break-all">{post.caption}</p>
          <ul className="mt-1 flex gap-1">
            {post.tags.map((tag) => (
              <li key={tag} className="text-light-3">
                #{tag}
              </li>
            ))}
          </ul>
        </div>

        <img
          src={post.imageUrl || "/public/assets/icons/profile-placeholder.svg"}
          alt={post.caption}
          className="post-card_img"
        />
      </Link>

      <PostStats post={post} showCommentBtn />
    </li>
  );
}

export default PostCard;
