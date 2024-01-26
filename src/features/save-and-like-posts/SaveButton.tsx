import { PostRecord } from "@/types/collection";
import { useRemoveSavedPost } from "./useRemoveSavedPost";
import { useSavePost } from "./useSavePost";
import { useSavedPostsRecord } from "./useSavedPostsRecord";
import { Loader } from "@/components/shared";

interface PostSaveStatus {
  isPostSaved: boolean;
  savedPostRecordId?: number;
}

function getPostSaveStatus(
  savedPostsRecord: PostRecord[] | undefined,
  postId: number,
): PostSaveStatus {
  const savedPostRecordId = savedPostsRecord?.find(
    (savePost) => savePost.postId === postId,
  )?.id;

  return {
    isPostSaved: Boolean(savedPostRecordId),
    savedPostRecordId,
  };
}
type SaveBtnProps = {
  postId: number;
  accountId: number;
};

function SaveButton({ postId, accountId }: SaveBtnProps) {
  const { data: savedPostsRecord } = useSavedPostsRecord();

  const { savePost, isPending: isSavingPost } = useSavePost();
  const { removeSavedPost, isPending: isRemovingSavedPost } =
    useRemoveSavedPost();

  const { isPostSaved, savedPostRecordId } = getPostSaveStatus(
    savedPostsRecord,
    postId,
  );

  function handleSavePost(e: React.MouseEvent) {
    e.stopPropagation();
    if (!accountId) return;

    if (!isPostSaved) {
      savePost({ accountId, postId });
    } else {
      if (!savedPostRecordId) return;
      removeSavedPost(savedPostRecordId);
    }
  }

  return (
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
  );
}

export default SaveButton;
