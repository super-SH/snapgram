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
      queryClient.invalidateQueries();
      queryClient.clear();
    },
  });

  return { signout, isPending, error };
}
