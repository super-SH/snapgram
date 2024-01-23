import { unfollowAccount } from "@/services/apiFollow";
import { AccountType } from "@/types/collection";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useUnfollowAccount() {
  const queryClient = useQueryClient();

  const account = queryClient.getQueryData<AccountType>(["account"]);
  const accountId = account?.id;

  const { mutate, isPending } = useMutation({
    mutationFn: (followsRecordId: number) => unfollowAccount(followsRecordId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["followings-record", accountId],
      });
      queryClient.invalidateQueries({
        queryKey: ["followings"],
      });
      queryClient.invalidateQueries({
        queryKey: ["followers"],
      });
    },
  });

  return { mutate, isPending };
}
