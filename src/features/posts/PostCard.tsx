import { multiFormatDateString } from "@/lib/utils";
import { AccountType, PostWithCreator } from "@/types/collection";
import { Link } from "react-router-dom";

type CreatorProps = {
  creator: AccountType;
  created_at: string;
  location: string | null;
};

type PostCardProps = {
  post: PostWithCreator;
};

function PostCard({ post }: PostCardProps) {
  console.log(post.creator);

  return (
    <li className="post-card">
      <div className="flex-between">
        <div className="flex items-center gap-3">
          <CreatorDetails
            creator={post.creator}
            created_at={post.created_at}
            location={post.location}
          />
        </div>
      </div>
    </li>
  );
}

function CreatorDetails({ creator, created_at, location }: CreatorProps) {
  return (
    <>
      <Link to={`profile/${creator.id}`}>
        <img
          src={"/assets/icons/profile-placeholder.svg"}
          alt={creator.name || "default profile"}
          className="h-12 w-12 rounded-full"
        />
      </Link>

      <div className="flex flex-col">
        <p>{creator.name}</p>

        <div className="flex-center subtle-semibold lg:small-regular gap-1 text-light-3">
          <p>{multiFormatDateString(created_at)}</p>
          {location ? (
            <>
              -<p>{location}</p>
            </>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default PostCard;
