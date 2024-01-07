import { getCurrentAccount } from "@/services/apiUser";
import { useMutation, useQuery } from "@tanstack/react-query";

export function useAccountInfo() {
  const { data, isFetching } = useQuery({
    queryKey: ["account"],
    queryFn: getCurrentAccount,
  });

  return { data, isFetching };
}