import { formatCount } from "@/lib/utils";
import { useCreatedPosts } from "../posts/useCreatedPosts";
import { useFollowers } from "../follow/useFollowers";
import { useFollowings } from "../follow/useFollowings";

function ProfileStats({ visitedAccountId }: { visitedAccountId: number }) {
  const { data: createdPostData } = useCreatedPosts();
  const { data: followersData } = useFollowers(visitedAccountId);
  const { data: followingsData } = useFollowings(visitedAccountId);

  return (
    <div className="flex justify-center gap-4 xl:justify-start">
      <div>
        <p className="text-xl font-medium text-primary-500">
          {formatCount(createdPostData?.count || 0)}
        </p>
        <p className="text-lg font-medium">Posts</p>
      </div>
      <div>
        <p className="text-xl font-medium text-primary-500">
          {formatCount(followersData?.count || 0)}
        </p>
        <p className="text-lg font-medium">Followers</p>
      </div>
      <div>
        <p className="text-xl font-medium text-primary-500">
          {formatCount(followingsData?.count || 0)}
        </p>
        <p className="text-lg font-medium">Followings</p>
      </div>
    </div>
  );
}

export default ProfileStats;
