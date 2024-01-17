import React from "react";
import { PostRecord, PostWithCreator } from "@/types/collection";
import { useSavedPosts } from "./useSavedPosts";
import { useSavePost } from "./useSavePost";
import { useAccountInfo } from "../accounts/useAccountInfo";
import { useRemoveSavedPost } from "./useRemoveSavedPost";
import { Loader } from "@/components/shared";
import { useLikedPosts } from "./useLikedPosts";
import { useLikePost } from "./useLikePost";
import { useUnlikePost } from "./useUnlikePost";
import { useLikesCount } from "./useLikesCount";
import { formatCount } from "@/lib/utils";

type PostStatsProps = { post: PostWithCreator };

interface PostStatus {
  isPostSaved: boolean;
  isPostLiked: boolean;
  savedPostRecordId?: number;
  likedPostRecordId?: number;
}

function getPostStatus(
  savedPosts: PostRecord[] | undefined,
  likedPosts: PostRecord[] | undefined,
  postId: number,
): PostStatus {
  const savedPostRecordId = savedPosts?.find(
    (savePost) => savePost.postId === postId,
  )?.id;

  const likedPostRecordId = likedPosts?.find(
    (likedPost) => likedPost.postId === postId,
  )?.id;

  return {
    isPostSaved: Boolean(savedPostRecordId),
    isPostLiked: Boolean(likedPostRecordId),
    savedPostRecordId,
    likedPostRecordId,
  };
}

function PostStats({ post }: PostStatsProps) {
  const { data: savedPosts } = useSavedPosts();
  const { data: likedPosts } = useLikedPosts();
  const { data: accountData, isFetching } = useAccountInfo();
  const { savePost, isPending: isSavingPost } = useSavePost();
  const { removeSavedPost, isPending: isRemovingSavedPost } =
    useRemoveSavedPost();
  const { likePost, isPending: isLikingPost } = useLikePost();
  const { unlikePost, isPending: isUnlikingPost } = useUnlikePost();
  const { data: likesCount } = useLikesCount(post.id);

  console.log(likesCount);

  const accountId = accountData?.id;

  const { isPostLiked, isPostSaved, savedPostRecordId, likedPostRecordId } =
    getPostStatus(savedPosts, likedPosts, post.id);

  function handleSavePost(e: React.MouseEvent) {
    e.stopPropagation();
    if (!accountId) return;

    if (!isPostSaved) {
      savePost({ accountId, postId: post.id });
    } else {
      if (!savedPostRecordId) return;
      removeSavedPost(savedPostRecordId);
    }
  }

  function handleLikePost(e: React.MouseEvent) {
    e.stopPropagation();
    if (!accountId) return;

    if (!isPostLiked) {
      likePost({ accountId, postId: post.id });
    } else {
      if (!likedPostRecordId) return;
      unlikePost(likedPostRecordId);
    }
  }

  return (
    <div className="z-20 flex items-center justify-between gap-4">
      <div className="flex gap-1" role="button" onClick={handleLikePost}>
        {isLikingPost || isUnlikingPost ? (
          <Loader />
        ) : (
          <>
            <img
              src={
                isPostLiked
                  ? `/assets/icons/liked.svg`
                  : `/assets/icons/like.svg`
              }
              alt={isPostLiked ? `filled heart icon` : `outlined heart icon`}
              width={20}
              height={20}
              className="cursor-pointer"
            />
            <p className="small-medium lg:base-medium">
              {formatCount(likesCount || 0)}
            </p>
          </>
        )}
      </div>

      <div role="button" onClick={handleSavePost}>
        {isSavingPost || isRemovingSavedPost ? (
          <Loader />
        ) : (
          <img
            src={
              isPostSaved ? "/assets/icons/saved.svg" : "/assets/icons/save.svg"
            }
            alt={
              isPostSaved ? "filled saved file icon" : "outlined save file icon"
            }
            width={20}
            height={20}
            className="cursor-pointer"
          />
        )}
      </div>
    </div>
  );
}

export default PostStats;
