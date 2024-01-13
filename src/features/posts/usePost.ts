import { getPostById } from "@/services/apiPost";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export function usePost() {
  const { postId } = useParams();

  const { data, isFetching } = useQuery({
    queryKey: ["post", postId],
    queryFn: () => getPostById(postId || ""),
  });

  return { data, isFetching };
}
