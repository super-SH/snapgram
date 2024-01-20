import { useQuery, useQueryClient } from "@tanstack/react-query";
import { AccountType } from "@/types/collection";
import { getLikedPosts } from "@/services/apiLikePost";
import { useParams } from "react-router-dom";

export function useLikedPosts() {
  const queryClient = useQueryClient();

  const { accountId } = useParams();
  const idOfVisitedUser = Number(accountId);

  const account = queryClient.getQueryData<AccountType>(["account"]);
  const idOfLoggedUser = account?.id;

  const accountIdParams = idOfVisitedUser || idOfLoggedUser;

  const { data, isFetching, error } = useQuery({
    queryKey: ["liked-posts", accountIdParams],
    queryFn: () => getLikedPosts(accountIdParams),
  });

  return { data, isFetching, error };
}
