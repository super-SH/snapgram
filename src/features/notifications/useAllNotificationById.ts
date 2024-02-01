import { getAllNotificationsById } from "@/services/apiNotification";
import { useQuery } from "@tanstack/react-query";
import { useAccountInfo } from "../accounts/useAccountInfo";

export function useAllNotificationById() {
  const { data: account } = useAccountInfo();
  const accountId = account?.id;

  const { data, error, isFetching } = useQuery({
    queryKey: ["notifications", accountId],
    queryFn: () => getAllNotificationsById(accountId),
    enabled: !!accountId,
    staleTime: 0,
    refetchOnMount: "always",
  });

  return { data, isFetching, error };
}
