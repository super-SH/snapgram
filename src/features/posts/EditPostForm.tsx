import * as z from "zod";

import { PostValidation } from "@/lib/validation";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";
import { usePost } from "./usePost";
import { useUpdatePost } from "./useUpdatePost";
import CommonPostForm from "./CommonPostForm";

function EditPostForm() {
  const { updatePost, isPending: isUpdatingPost } = useUpdatePost();
  const { toast } = useToast();
  const navigate = useNavigate();

  const { data: post, isFetching: isFetchingPost } = usePost();

  if (isFetchingPost) return "loading";

  // 2. Define a submit handler.
  function handleSubmit(values: z.infer<typeof PostValidation>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
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
