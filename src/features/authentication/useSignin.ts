import { signin as signinApi } from "@/services/apiUser";
import { useMutation } from "@tanstack/react-query";

export function useSignin() {
  const {
    mutateAsync: signin,
    isPending,
    error,
  } = useMutation({
    mutationFn: (user: { email: string; password: string }) => signinApi(user),
  });

  return { signin, isPending, error };
}
