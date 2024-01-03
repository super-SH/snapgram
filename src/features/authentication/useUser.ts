import { getCurrentUser } from "@/services/apiUser";
import { useQuery } from "@tanstack/react-query";

export function useUser() {
  const { data: user, isFetching } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });

  return { user, isFetching, isAuthenticated: user?.role === "authenticated" };
}
