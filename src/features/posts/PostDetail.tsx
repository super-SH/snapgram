import { useNavigate } from "react-router-dom";
import PostCreatorDetails from "./PostCreatorDetails";
import { usePost } from "./usePost";
import EditPostButton from "./EditPostButton";
import { useAccountInfo } from "../accounts/useAccountInfo";
import { useDeletePost } from "./useDeletePost";
import { useToast } from "@/components/ui/use-toast";
import PostStats from "../save-and-like-posts/PostStats";
import { Loader } from "@/components/shared";
import DeletePostButton from "./DeletePostButton";
import CommentBoxAndInput from "../comments/CommentBoxAndInput";

function PostDetail() {
  const { data: post, isFetching } = usePost();
  const { data: accountData } = useAccountInfo();

  const { deletePost, isPending: isDeleting } = useDeletePost();
  const { toast } = useToast();

  const navigate = useNavigate();

  if (isFetching)
    return (
      <div className="flex-center h-full w-full">
        <Loader />
      </div>
    );

  if (!post) return "error";

  const isCreator = accountData?.accountId === post?.creator.accountId;

  const handleDeletePost = () => {
    console.log("del");
    deletePost(
      { postId: post.id, imageUrl: post.imageUrl || "" },
      {
        onSuccess: () => {
          toast({ description: "Post successfully deleted" });
          navigate("/");
        },
        onError: () => {
          toast({
            variant: "destructive",
            description: "Something went wrong, please try again.",
          });
        },
      },
    );
  };

  return (
    <div className="post_details-card">
      <img src={post.imageUrl || ""} alt="post" className="post_details-img" />

      <div className="post_details-info">
        <div className="flex-between w-full">
          <PostCreatorDetails
            creator={post.creator}
            created_at={post.created_at}
            location={post.location}
          />
          {isCreator ? (
            <div className="flex-center gap-2">
              <EditPostButton
                postId={post.id}
                creatorId={post.creator.accountId}
              />
              <DeletePostButton
                onDelete={handleDeletePost}
                isDeleting={isDeleting}
              />
            </div>
          ) : null}
        </div>

        <hr className="w-full border border-dark-4/80" />

        <div className="small-medium lg:base-regular flex w-full flex-1 flex-col">
          <p className="break-all">{post.caption}</p>
          <ul className="mt-2 flex gap-1">
            {post.tags?.map((tag: string, index: number) => (
              <li key={`${tag}${index}`} className="small-regular text-light-3">
                #{tag}
              </li>
            ))}
          </ul>
        </div>

        {accountData && (
          <CommentBoxAndInput postId={post.id} accountData={accountData} />
        )}

        <div className="w-full">
          <PostStats post={post} showCommentBtn />
        </div>
      </div>
    </div>
  );
}

export default PostDetail;
