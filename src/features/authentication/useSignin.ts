import { signin as signinApi } from "@/services/apiUser";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useSignin() {
  const queryClient = useQueryClient();

  const {
    mutateAsync: signin,
    isPending,
    error,
  } = useMutation({
    mutationFn: (user: { email: string; password: string }) => signinApi(user),
    onSuccess: (data) => {
      queryClient.setQueryData(["user"], data.data.user);
      queryClient.setQueryData(["account"], data.account);
    },
  });

  return { signin, isPending, error };
}
