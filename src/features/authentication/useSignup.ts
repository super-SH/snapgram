import { INewUser } from "@/types";
import { signup as signupApi } from "@/services/apiUser";
import { useMutation } from "@tanstack/react-query";

export function useSignup() {
  const {
    mutateAsync: signup,
    isPending,
    error,
  } = useMutation({
    mutationFn: (newUser: INewUser) => signupApi(newUser),
  });

  return { signup, isPending, error };
}
