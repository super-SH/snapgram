import * as z from "zod";

import { PostValidation } from "@/lib/validation";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";
import { usePost } from "./usePost";
import { useUpdatePost } from "./useUpdatePost";
import CommonPostForm from "./CommonPostForm";
import { Loader } from "@/components/shared";

function EditPostForm() {
  const { updatePost, isPending: isUpdatingPost } = useUpdatePost();
  const { toast } = useToast();
  const navigate = useNavigate();

  const { data: post, isFetching: isFetchingPost } = usePost();

  if (isFetchingPost)
    return (
      <div className="flex-center h-full w-full">
        <Loader />
      </div>
    );


  function handleSubmit(values: z.infer<typeof PostValidation>) {

    if (post) {
      updatePost(
        { ...values, postId: post?.id, imageUrl: post?.imageUrl },
        {
          onSuccess: () => {
            toast({ description: "Post successfully updated" });
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
    }
  }

  return (
    <CommonPostForm
      post={post}
      onSubmit={handleSubmit}
      isPendingMutation={isUpdatingPost}
    />
  );
}

export default EditPostForm;
