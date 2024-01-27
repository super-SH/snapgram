import { Loader } from "@/components/shared";
import { useAllCommentsAndCountByPostId } from "./useAllCommentsAndCountByPostId";
import PostCommentCard from "./PostCommentCard";

type PostCommentBoxProps = {
  postId: number;
};

function PostCommentBox({ postId }: PostCommentBoxProps) {
  const { data, isFetching } = useAllCommentsAndCountByPostId(postId);

  if (isFetching)
    return (
      <div className="flex-center h-full w-full">
        <Loader />
      </div>
    );

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
