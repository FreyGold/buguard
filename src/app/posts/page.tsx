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
async function Page({
   searchParams,
}: {
   searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
   const params = await searchParams;
   const page = Number(params["page"] ?? 1);
   const limit = Number(params["per_page"] ?? 5);
   const start = (page - 1) * limit;
   const { posts, total } = await fetchPosts(start, limit);
   const totalPages = Math.ceil(total / limit);
   return (
      <div className="flex gap-9 mt-4 p-8 flex-col font-semibold">
         <h3 className="text-2xl">Recent Blog Posts</h3>
         <div className="grid grid-cols-1 gap-8">
            {posts.map((post: Post) => (
               <Posts post={post} key={post.id} />
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
                     href={`?page=${page < totalPages ? page + 1 : totalPages}`}
                     aria-disabled={page === totalPages}
                  />
               </PaginationItem>
            </PaginationContent>
         </Pagination>
      </div>
   );
}

export default Page;
