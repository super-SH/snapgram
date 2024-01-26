import { Loader } from "@/components/shared";
import { useAllCommentsAndCountByPostId } from "./useAllCommentsAndCountByPostId";
import { date } from "zod";
import PostCommentCard from "./PostCommentCard";

function PostCommentBox({ postId }: { postId: number }) {
  const { data, isFetching } = useAllCommentsAndCountByPostId(postId);

  if (isFetching)
    return (
      <div className="flex-center h-full w-full">
        <Loader />
      </div>
    );

  console.log(data);

  return (
    <div className="post_comment-box">
      {data?.data &&
        data.data.map((comment) => (
          <PostCommentCard comment={comment} key={comment.id} />
        ))}
    </div>
  );
}

export default PostCommentBox;
