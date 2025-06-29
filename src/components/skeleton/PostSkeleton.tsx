import { Skeleton } from "@/components/ui/skeleton";

function PostSkeleton({
   direction = "vertical",
}: {
   direction: "horizontal" | "vertical";
}) {
   return (
      <div>
         <div
            className={`flex gap-9 font-semibold ${
               direction === "horizontal" ? "flex-col md:flex-row" : "flex-col"
            }`}>
            <div
               className={
                  direction === "horizontal"
                     ? "relative flex-1 aspect-[4/3] min-w-[180px] max-w-[350px] md:max-w-[350px]"
                     : "relative w-full h-48 sm:h-64 md:h-80 lg:h-96"
               }>
               <Skeleton className="absolute inset-0 w-full h-full" />
            </div>
            <div className="flex flex-col gap-4 flex-1 font-semibold justify-center">
               <Skeleton className="h-5 w-40" />
               <div className="flex justify-between items-center">
                  <Skeleton className="h-8 w-2/3" />
                  <Skeleton className="size-10" />
               </div>
               <Skeleton className="h-4 w-full" />
               <div className="flex gap-2">
                  {[...Array(3)].map((_, i) => (
                     <Skeleton key={i} className="h-6 w-16 rounded-3xl" />
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
}

export default PostSkeleton;
