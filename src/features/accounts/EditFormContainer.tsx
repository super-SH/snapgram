import { AccountValidation } from "@/lib/validation";
import EditProfileForm from "./EditProfileForm";
import * as z from "zod";
import { useAccountInfo } from "./useAccountInfo";
import { Loader } from "@/components/shared";

function EditFormContainer() {
  const { data, isFetching } = useAccountInfo();
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
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <>
      {data && (
        <EditProfileForm onSubmit={onSubmit} account={data} isEditing={false} />
      )}
    </>
  );
}

export default EditFormContainer;
