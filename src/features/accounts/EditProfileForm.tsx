import { Loader } from "@/components/shared";
import ProfileUploader from "@/components/shared/ProfileUploader";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { AccountValidation } from "@/lib/validation";
import { AccountType } from "@/types/collection";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import * as z from "zod";

type EditProfileFormProps = {
  account: AccountType;
  onSubmit: (values: z.infer<typeof AccountValidation>) => void;
  isEditing: boolean;
};

function EditProfileForm({
  account,
  onSubmit,
  isEditing,
}: EditProfileFormProps) {
  // 1. Define your form.
  const form = useForm<z.infer<typeof AccountValidation>>({
    resolver: zodResolver(AccountValidation),
    defaultValues: {
      username: account?.username ? account.username : "",
      name: account?.name ? account.name : "",
      bio: account?.bio ? account.bio : "",
      file: [],
    },
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full max-w-5xl flex-col gap-8"
      >
        <FormField
          control={form.control}
          name="file"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <ProfileUploader
                  fieldChange={field.onChange}
                  profileUrl={account?.profileUrl || ""}
                />
              </FormControl>

              <FormMessage className="shad-form_message" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="shad-form_label">Username</FormLabel>
              <FormControl>
                <Input className="shad-input" {...field} />
              </FormControl>

              <FormMessage className="shad-form_message" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="shad-form_label">Name</FormLabel>
              <FormControl>
                <Input className="shad-input" {...field} />
              </FormControl>

              <FormMessage className="shad-form_message" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="bio"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="shad-form_label">Bio</FormLabel>
              <FormControl>
                <Textarea
                  className="shad-textarea custom-scrollbar"
                  {...field}
                />
              </FormControl>

              <FormMessage className="shad-form_message" />
            </FormItem>
          )}
        />
        <div className="flex items-center justify-end gap-3">
          <Button
            type="submit"
            className="shad-button_primary h-12 px-3 py-5"
            disabled={isEditing}
          >
            {isEditing ? <Loader /> : "Update Profile"}
          </Button>
        </div>
      </form>
    </Form>
  );
}

export default EditProfileForm;
