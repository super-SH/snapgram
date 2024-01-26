import { PostWithCreator } from "@/types/collection";
import { useAccountInfo } from "../accounts/useAccountInfo";
import SaveButton from "./SaveButton";
import LikeButton from "./LikeButton";

type PostStatsProps = { post: PostWithCreator };

function PostStats({ post }: PostStatsProps) {
  const { data: accountData } = useAccountInfo();
  const accountId = accountData?.id;

  return (
    <div className="z-20 flex items-center justify-between gap-4">
      <div className="flex gap-1">
        {accountId && <LikeButton postId={post.id} accountId={accountId} />}
      </div>

      {accountId && <SaveButton postId={post.id} accountId={accountId} />}
    </div>
  );
}

export default PostStats;
