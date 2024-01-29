import { useQuery } from "@tanstack/react-query";
import { getLikedPosts } from "@/services/apiLikePost";
import { useParams } from "react-router-dom";
import { useAccountInfo } from "../accounts/useAccountInfo";

export function useLikedPosts() {
  const { accountId } = useParams();
  const idOfVisitedUser = Number(accountId);

  const { data: account } = useAccountInfo();
  const idOfLoggedUser = account?.id;

  const accountIdParams = idOfVisitedUser || idOfLoggedUser;

  const { data, isFetching, error } = useQuery({
    queryKey: ["liked-posts", accountIdParams],
    queryFn: () => getLikedPosts(accountIdParams),
  });

  return { data, isFetching, error };
}
