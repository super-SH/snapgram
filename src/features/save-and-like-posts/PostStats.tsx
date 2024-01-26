import { PostWithCreator } from "@/types/collection";
import { useAccountInfo } from "../accounts/useAccountInfo";
import SaveButton from "./SaveButton";
import LikeButton from "./LikeButton";
import CommentButton from "../comments/CommentButton";

type PostStatsProps = { post: PostWithCreator; showCommentBtn?: boolean };

function PostStats({ post, showCommentBtn = false }: PostStatsProps) {
  const { data: accountData } = useAccountInfo();
  const accountId = accountData?.id;

  return (
    <div className="z-20 flex items-center justify-between gap-4">
      <div className="flex gap-3">
        {accountId && (
          <>
            <LikeButton postId={post.id} accountId={accountId} />
            {showCommentBtn && <CommentButton postId={post.id} />}
          </>
        )}
      </div>

      {accountId && <SaveButton postId={post.id} accountId={accountId} />}
    </div>
  );
}

export default PostStats;
