import { getSearchPosts } from "@/services/apiPost";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

// might fix that later
export function useSearchPosts() {
  const [searchParams] = useSearchParams();

  // 1 filter
  const searchValue = searchParams.get("search");

  const { data, isFetching } = useQuery({
    queryKey: ["search-posts", searchValue],
    queryFn: () => getSearchPosts(searchValue || ""),
  });

  return { data, isFetching };
}
