import { followAccount } from "@/services/apiFollow";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useFollowAccount() {
  const queryClient = useQueryClient();

  // const account = queryClient.getQueryData<AccountType>(["account"]);
  // const accountId = account?.id;

  const { mutate, isPending } = useMutation({
    mutationFn: ({
      followedById,
      followToId,
    }: {
      followedById: number;
      followToId: number;
    }) => followAccount(followToId, followedById),
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ["followings-record", data.followedById],
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
