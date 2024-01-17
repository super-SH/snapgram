import { signout as signoutApi } from "@/services/apiUser";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useSignout() {
  const queryClient = useQueryClient();

  const {
    mutateAsync: signout,
    isPending,
    error,
  } = useMutation({
    mutationFn: signoutApi,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });

  return { signout, isPending, error };
}
