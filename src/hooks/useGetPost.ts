import { fetchPost } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";

const useGetPost = (id: string, options = {}) => {
   return useQuery({
      queryKey: ["post", id],
      queryFn: () => fetchPost(id),
      staleTime: 1000 * 60 * 5,
      ...options,
   });
};

export default useGetPost;
