import { AccountValidation } from "@/lib/validation";
import EditProfileForm from "./EditProfileForm";
import * as z from "zod";
import { useAccountInfo } from "./useAccountInfo";
import { Loader } from "@/components/shared";
import { useUpdateProfile } from "./useUpdateProfile";
import { useNavigate, useParams } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

function EditFormContainer() {
  const { accountId } = useParams();
  const { toast } = useToast();
  const navigate = useNavigate();

  const { data, isFetching } = useAccountInfo();
  const { mutate: updateProfile, isPending: isUpdatingProfile } =
    useUpdateProfile();

  if (isFetching)
    return (
      <div className="flex-center h-full w-full">
        <Loader />
      </div>
    );

  if (!data && !isFetching)
    return (
      <div className="flex-center h-full w-full">
        <p>Something went wrong</p>
      </div>
    );

  function onSubmit(values: z.infer<typeof AccountValidation>) {
    if (!accountId) return;
    updateProfile(
      { ...values, accountId: Number(accountId) },
      {
        onSuccess: () => {
          toast({ description: "Profile successfully updated" });
        },
        onError: () => {
          toast({
            variant: "destructive",
            description: "Something went wrong, please try again.",
          });
        },
        onSettled: () => {
          navigate(`/profile/${accountId}`);
        },
      },
    );
  }

  return (
    <>
      {data && (
        <EditProfileForm
          onSubmit={onSubmit}
          account={data}
          isEditing={isUpdatingProfile}
        />
      )}
    </>
  );
}

export default EditFormContainer;
