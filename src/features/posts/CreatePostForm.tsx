import * as z from "zod";

import { PostValidation } from "@/lib/validation";
import { useCreatePost } from "./useCreatePost";
import { useAccountInfo } from "../accounts/useAccountInfo";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";
import CommonPostForm from "./CommonPostForm";
import { Loader } from "@/components/shared";

function CreatePostForm() {
  const { createPost, isPending: isCreating } = useCreatePost();
  const { data: account, isFetching } = useAccountInfo();
  const { toast } = useToast();
  const navigate = useNavigate();

  if (isFetching)
    return (
      <div className="flex-center h-full w-full">
        <Loader />
      </div>
    );

  function handleSubmit(values: z.infer<typeof PostValidation>) {

    const accountId = account?.id;
    if (!accountId) return;
    
    createPost(
      { ...values, accountId },
      {
        onSuccess: () => {
          toast({ description: "Post successfully created" });
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

  return (
    <CommonPostForm onSubmit={handleSubmit} isPendingMutation={isCreating} />
  );
}

export default CreatePostForm;
