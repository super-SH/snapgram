import { PostWithCreator } from "@/types/collection";
import { useAccountInfo } from "../accounts/useAccountInfo";

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

export default PostStats;
