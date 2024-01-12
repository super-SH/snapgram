import React from "react";
import { PostWithCreator } from "@/types/collection";
import { useSavedPosts } from "./useSavedPosts";
import { useSavePost } from "./useSavePost";
import { useAccountInfo } from "../accounts/useAccountInfo";

function PostStats({ post }: { post: PostWithCreator }) {
  const { data: savedPosts } = useSavedPosts();
  const { data: accountData, isFetching } = useAccountInfo();

  const { savePost, isPending } = useSavePost();

  const accountId = accountData?.id;

  function handleSavePost(e: React.MouseEvent) {
    e.stopPropagation();
    console.log(savedPosts);

    if (!accountId) return;

    savePost({ accountId, postId: post.id });
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

      <div>
        <img
          src={`/assets/icons/save.svg`}
          alt={`outlined save file icon`}
          width={20}
          height={20}
          className="cursor-pointer"
          onClick={handleSavePost}
        />
      </div>
    </div>
  );
}

export default PostStats;
