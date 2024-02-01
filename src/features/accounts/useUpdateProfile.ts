import { updateProfile } from "@/services/apiAccount";
import { IUpdateUser } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useUpdateProfile() {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: (profile: IUpdateUser) => updateProfile(profile),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["account"] });
    },
  });

  return { mutate, isPending };
}
