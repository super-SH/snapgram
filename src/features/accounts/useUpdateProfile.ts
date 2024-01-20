import { updateProfile } from "@/services/apiAccount";
import { IUpdateUser } from "@/types";
import { useMutation } from "@tanstack/react-query";

export function useUpdateProfile() {
  const { mutate, isPending } = useMutation({
    mutationFn: (profile: IUpdateUser) => updateProfile(profile),
    mutationKey: ["account"],
  });

  return { mutate, isPending };
}
