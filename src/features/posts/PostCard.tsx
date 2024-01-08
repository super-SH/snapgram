import { multiFormatDateString } from "@/lib/utils";
import { AccountType, PostWithCreator } from "@/types/collection";
import { Link } from "react-router-dom";
import { useAccountInfo } from "../accounts/useAccountInfo";

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
    <li className="post-card flex flex-col gap-3">
      <div className="flex-between ">
        <div className="flex items-center gap-3">
          <CreatorDetails
            creator={post.creator}
            created_at={post.created_at}
            location={post.location}
          />
        </div>

        <EditButton postId={post.id} creatorId={post.creator.accountId} />
      </div>

      <Link to={`posts/${post.id}`}>
        <div className="small-medium lg:base-medium py-3">
          <p>{post.caption}</p>
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
        />
      </Link>

      <PostStats post={post} />
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

function EditButton({
  postId,
  creatorId,
}: {
  postId: number;
  creatorId: string;
}) {
  const { data, isFetching } = useAccountInfo();

  if (!data && !isFetching) return null;

  const isCreator = data?.accountId === creatorId;

  if (!isCreator) return null;

  return (
    <Link to={`edit-post/${postId}`}>
      <img
        src="/assets/icons/edit.svg"
        alt="edit icon"
        height={20}
        width={20}
      />
    </Link>
  );
}

function PostStats({ post }: { post: PostWithCreator }) {
  const { data, isFetching } = useAccountInfo();
  const accountId = data?.accountId;

  return (
    <div className="z-20 flex items-center justify-between">
      <div className="flex gap-2">
        <img
          src={`/assets/icons/like.svg`}
          alt={`outlined heart icon`}
          width={20}
          height={20}
          className="cursor-pointer"
        />
        <p className="small-medium lg:base-medium">0</p>
      </div>

      <div>
        <img
          src={`/assets/icons/save.svg`}
          alt={`outlined save file icon`}
          width={20}
          height={20}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
}

export default PostCard;
