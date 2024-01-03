import { signout as signoutApi } from "@/services/apiUser";
import { useMutation } from "@tanstack/react-query";

export function useSignout() {
  const {
    mutateAsync: signout,
    isPending,
    error,
  } = useMutation({
    mutationFn: signoutApi,
  });

  return { signout, isPending, error };
}
