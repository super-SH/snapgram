import { getAllNotificationsById } from "@/services/apiNotification";
import { AccountType } from "@/types/collection";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export function useAllNotificationById() {
  const queryClient = useQueryClient();

  const account = queryClient.getQueryData<AccountType>(["account"]);
  const accountId = account?.id;

  const { data, error, isFetching } = useQuery({
    queryKey: ["notifications", accountId],
    queryFn: () => getAllNotificationsById(accountId),
    enabled: !!accountId,
  });

  return { data, isFetching, error };
}
