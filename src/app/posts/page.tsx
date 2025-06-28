import { fetchPosts } from "@/lib/api";
import Posts from "../../_components/Posts";
import {
   Pagination,
   PaginationContent,
   PaginationEllipsis,
   PaginationItem,
   PaginationLink,
   PaginationNext,
   PaginationPrevious,
} from "@/components/ui/pagination";
import { Post } from "@/types/post.type";
import { Reveal } from "@/_components/Reveal";
import { div } from "framer-motion/client";
async function Page({
   searchParams,
}: {
   searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
   const params = await searchParams;
   const page = Number(params["page"] ?? 1);
   const limit = Number(params["per_page"] ?? 10);
   const start = (page - 1) * limit;
   const { posts, total } = await fetchPosts(start, limit);
   const totalPages = Math.ceil(total / limit);
   return (
      <div>
         <Reveal>
            <div className="flex mt-4 flex-col items-center gap-3 text-center">
               <div className="h-[1px] bg-[#00000057] dark:bg-white dark:opacity-30 w-[100vw]"></div>
               <h3 className="text-7xl font-bold md:text-[160px] lg:text-[240px]">
                  THE BLOG
               </h3>
               <div className="h-[1px] bg-[#00000057] dark:bg-white dark:opacity-30 w-[100vw]"></div>
            </div>
         </Reveal>
         <div className="flex gap-9 mt-4 p-8 flex-col font-semibold">
            <Reveal>
               <h3 className="text-2xl">Recent Blog Posts</h3>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="md:col-span-2 lg:col-span-1">
                  <Posts post={posts[0]} direction="vertical" />
               </div>

               <div className="flex flex-col gap-8 md:col-span-2 lg:col-span-1  mb-6">
                  <Posts post={posts[1]} direction="horizontal" />
                  <Posts post={posts[2]} direction="horizontal" />
               </div>

               <div className="md:col-span-2 lg:col-span-3">
                  <Posts post={posts[3]} direction="vertical" />
               </div>
            </div>
            <Reveal>
               <h3 className="text-2xl">All Blog Posts</h3>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {posts.slice(4).map((post: Post) => (
                  <Reveal direction="left" key={post.id}>
                     <Posts post={post} key={post.id} direction="vertical" />
                  </Reveal>
               ))}
            </div>
            <Pagination>
               <PaginationContent>
                  <PaginationItem>
                     <PaginationPrevious
                        href={`?page=${page > 1 ? page - 1 : 1}`}
                        aria-disabled={page === 1}
                     />
                  </PaginationItem>

                  {/* Always show first page */}
                  <PaginationItem>
                     <PaginationLink href="?page=1" isActive={page === 1}>
                        1
                     </PaginationLink>
                  </PaginationItem>

                  {/* Show ellipsis if current page is far from start */}
                  {page > 3 && totalPages > 4 && (
                     <PaginationItem>
                        <PaginationEllipsis />
                     </PaginationItem>
                  )}

                  {/* Show previous, current, next page numbers if not at the edges */}
                  {Array.from({ length: totalPages }, (_, i) => i + 1)
                     .filter(
                        (p) =>
                           (p === page - 1 && p !== 1 && p !== totalPages) ||
                           (p === page && p !== 1 && p !== totalPages) ||
                           (p === page + 1 && p !== 1 && p !== totalPages)
                     )
                     .map((p) => (
                        <PaginationItem key={p}>
                           <PaginationLink
                              href={`?page=${p}`}
                              isActive={page === p}>
                              {p}
                           </PaginationLink>
                        </PaginationItem>
                     ))}

                  {/* Show ellipsis if current page is far from end */}
                  {page < totalPages - 2 && totalPages > 4 && (
                     <PaginationItem>
                        <PaginationEllipsis />
                     </PaginationItem>
                  )}

                  {/* Always show last page if more than one */}
                  {totalPages > 1 && (
                     <PaginationItem>
                        <PaginationLink
                           href={`?page=${totalPages}`}
                           isActive={page === totalPages}>
                           {totalPages}
                        </PaginationLink>
                     </PaginationItem>
                  )}

                  <PaginationItem>
                     <PaginationNext
                        href={`?page=${
                           page < totalPages ? page + 1 : totalPages
                        }`}
                        aria-disabled={page === totalPages}
                     />
                  </PaginationItem>
               </PaginationContent>
            </Pagination>
         </div>
      </div>
   );
}

export default Page;
