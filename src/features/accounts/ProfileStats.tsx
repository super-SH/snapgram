import { formatCount } from "@/lib/utils";
import { useCreatedPosts } from "../posts/useCreatedPosts";

function ProfileStats() {
  const { data } = useCreatedPosts();

  return (
    <div className="flex justify-center gap-4 xl:justify-start">
      <div>
        <p className="text-xl font-medium text-primary-500">
          {formatCount(data?.count || 0)}
        </p>
        <p className="text-lg font-medium">Posts</p>
      </div>
      <div>
        <p className="text-xl font-medium text-primary-500">0</p>
        <p className="text-lg font-medium">Followers</p>
      </div>
      <div>
        <p className="text-xl font-medium text-primary-500">0</p>
        <p className="text-lg font-medium">Following</p>
      </div>
    </div>
  );
}

export default ProfileStats;
