import { PostRecord } from "@/types/collection";
import { useLikePost } from "./useLikePost";
import { useLikedPostsRecord } from "./useLikedPostsRecord";
import { useLikesCount } from "./useLikesCount";
import { useUnlikePost } from "./useUnlikePost";
import { formatCount } from "@/lib/utils";
import { Loader } from "@/components/shared";

interface PostLikeStatus {
  isPostLiked: boolean;
  likedPostRecordId?: number;
}

function getPostLikeStatus(
  likedPostsRecord: PostRecord[] | undefined,
  postId: number,
): PostLikeStatus {
  const likedPostRecordId = likedPostsRecord?.find(
    (likedPost) => likedPost.postId === postId,
  )?.id;

  return {
    isPostLiked: Boolean(likedPostRecordId),
    likedPostRecordId,
  };
}

type LikeBtnProps = {
  postId: number;
  accountId: number;
  creatorId: number;
};

function LikeButton({ postId, accountId, creatorId }: LikeBtnProps) {
  const { data: likedPostsRecord } = useLikedPostsRecord();

  const { likePost, isPending: isLikingPost } = useLikePost();
  const { unlikePost, isPending: isUnlikingPost } = useUnlikePost();
  const { data: likesCount } = useLikesCount(postId);

  const { isPostLiked, likedPostRecordId } = getPostLikeStatus(
    likedPostsRecord,
    postId,
  );

  function handleLikePost(e: React.MouseEvent) {
    e.stopPropagation();
    if (!accountId) return;

    if (!isPostLiked) {
      // need to pass creatorId to make notification
      likePost({ accountId, postId, creatorId });
    } else {
      if (!likedPostRecordId) return;
      unlikePost(likedPostRecordId);
    }
  }

  if (isLikingPost || isUnlikingPost) return <Loader />;

  return (
    <div
      className="flex h-5 items-center gap-2"
      role="button"
      onClick={handleLikePost}
    >
      <img
        src={isPostLiked ? `/assets/icons/liked.svg` : `/assets/icons/like.svg`}
        alt={isPostLiked ? `filled heart icon` : `outlined heart icon`}
        width={20}
        height={20}
        className="cursor-pointer"
      />
      <p className="small-medium lg:base-medium">
        {formatCount(likesCount || 0)}
      </p>
    </div>
  );
}

export default LikeButton;
