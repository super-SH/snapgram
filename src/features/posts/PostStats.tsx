import React from "react";
import { PostWithCreator } from "@/types/collection";
import { useSavedPosts } from "./useSavedPosts";
import { useSavePost } from "./useSavePost";
import { useAccountInfo } from "../accounts/useAccountInfo";
import { useRemoveSavedPost } from "./useRemoveSavedPost";

type PostStatsProps = { post: PostWithCreator };

function PostStats({ post }: PostStatsProps) {
  const { data: savedPosts } = useSavedPosts();
  const { data: accountData, isFetching } = useAccountInfo();
  const { savePost, isPending: isSavingPost } = useSavePost();
  const { removeSavedPost, isPending: isRemovingSavedPost } =
    useRemoveSavedPost();

  const accountId = accountData?.id;

  // !! make it to boolean
  const savedPostRecordId = savedPosts?.find(
    (savePost) => savePost.postId === post.id,
  )?.id;
  const isPostSaved = Boolean(savedPostRecordId);

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

      <div role="button" onClick={handleSavePost}>
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
      </div>
    </div>
  );
}

export default PostStats;
