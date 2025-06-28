import { fetchPosts } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";

const useGetPosts = (page: number, options = {}) => {
   return useQuery({
      queryKey: ["posts", page],
      queryFn: () => fetchPosts(page),
      staleTime: 1000 * 60 * 5,
      ...options,
   });
};

export default useGetPosts;
