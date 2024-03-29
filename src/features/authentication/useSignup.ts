import { INewUser } from "@/types";
import { signup as signupApi } from "@/services/apiUser";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useSignup() {
  const queryClient = useQueryClient();

  const {
    mutateAsync: signup,
    isPending,
    error,
  } = useMutation({
    mutationFn: (newUser: INewUser) => signupApi(newUser),
    onSuccess: (data) => {
      queryClient.setQueryData(["user"], data.data.user);
      queryClient.setQueryData(["account"], data.account);
    },
  });

  return { signup, isPending, error };
}
