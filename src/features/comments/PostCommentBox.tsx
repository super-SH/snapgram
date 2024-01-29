import { useAllCommentsAndCountByPostId } from "./useAllCommentsAndCountByPostId";
import PostCommentCard from "./PostCommentCard";
import { PostCommentBoxSkeleton } from "@/components/loaderSkeleton";

type PostCommentBoxProps = {
  postId: number;
};

function PostCommentBox({ postId }: PostCommentBoxProps) {
  const { data, isFetching } = useAllCommentsAndCountByPostId(postId);

  if (isFetching) return <PostCommentBoxSkeleton />;

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
