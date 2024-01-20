import { getCreatedPostsByAccountId } from "@/services/apiPost";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export function useCreatedPosts() {
  const { accountId } = useParams();

  const { data, isFetching } = useQuery({
    queryKey: ["created-posts"],
    queryFn: () => getCreatedPostsByAccountId(Number(accountId)),
  });

  return { data, isFetching };
}
