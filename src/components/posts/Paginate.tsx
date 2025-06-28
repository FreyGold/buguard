import {
   Pagination,
   PaginationContent,
   PaginationEllipsis,
   PaginationItem,
   PaginationLink,
   PaginationNext,
   PaginationPrevious,
} from "@/components/ui/Pagination";
import { Dispatch, SetStateAction } from "react";

function Paginate({
   page,
   totalPages,
   setPage,
}: {
   page: number;
   totalPages: number;
   setPage: Dispatch<SetStateAction<number>>;
}) {
   return (
      <Pagination>
         <PaginationContent>
            <PaginationItem>
               <PaginationPrevious
                  href={`?page=${page > 1 ? page - 1 : 1}`}
                  onClick={() => {
                     page > 1 ? setPage((page) => page - 1) : 1;
                  }}
                  aria-disabled={page === 1}
               />
            </PaginationItem>

            {/* Always show first page */}
            <PaginationItem>
               <PaginationLink
                  href="?page=1"
                  isActive={page === 1}
                  onClick={() => {
                     setPage(1);
                  }}>
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
                        isActive={page === p}
                        onClick={() => {
                           setPage(p);
                        }}>
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
                     isActive={page === totalPages}
                     onClick={() => {
                        setPage(totalPages);
                     }}>
                     {totalPages}
                  </PaginationLink>
               </PaginationItem>
            )}

            <PaginationItem>
               <PaginationNext
                  href={`?page=${page < totalPages ? page + 1 : totalPages}`}
                  aria-disabled={page === totalPages}
                  onClick={() => {
                     page < totalPages
                        ? setPage((page) => page + 1)
                        : totalPages;
                  }}
               />
            </PaginationItem>
         </PaginationContent>
      </Pagination>
   );
}

export default Paginate;
