"use client";

import { Reveal } from "@/components/ui/Reveal";
import useGetPosts from "@/hooks/useGetPosts";
import { useSearchParams } from "next/navigation";
import Header from "../posts/Header";
import Recent from "../posts/Recent";
import AllPosts from "../posts/AllPosts";
import Paginate from "../posts/Paginate";
import { useState } from "react";
import RecentSkeleton from "../skeletons/RecentSkeleton";
import AllSkeleton from "../skeletons/AllSkeleton";

function PostsPage() {
   const searchParams = useSearchParams();
   const [page, setPage] = useState(Number(searchParams.get("page") ?? 1));

   const {
      data: recentPosts = [],
      isLoading: isLoadingFirst,
      isError: isErrorFirst,
   } = useGetPosts(1);

   const {
      data: paginatedPosts = [],
      isLoading,
      isError,
   } = useGetPosts(page, {
      enabled: page !== 1,
   });

   const totalPages = Math.ceil(100 / 10);

   if (isLoadingFirst) {
      return (
         <div className="flex gap-9 mt-4 p-8 flex-col font-semibold">
            <Header />
            <RecentSkeleton />
         </div>
      );
   }
   if (isError || isErrorFirst) {
      throw new Error("Error");
   }
   return (
      <div>
         <Reveal>
            <Header />
         </Reveal>
         <div className="flex gap-9 mt-4 p-8 flex-col font-semibold">
            <Recent recentPosts={recentPosts} />
            {isLoading && <AllSkeleton />}
            <AllPosts paginatedPosts={paginatedPosts} />
            <Paginate page={page} totalPages={totalPages} setPage={setPage} />
         </div>
      </div>
   );
}

export default PostsPage;
