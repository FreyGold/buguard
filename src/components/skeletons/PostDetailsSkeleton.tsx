import { Skeleton } from "@/components/ui/skeleton";

function PostDetailsSkeleton() {
   return (
      <div className="flex w-full h-screen px-8 py-5 gap-8 flex-col">
         <Skeleton className="h-6 w-40" />
         <Skeleton className="h-12 w-2/3" />
         <div className="relative aspect-video w-full">
            <Skeleton className="absolute inset-0 w-full h-full" />
         </div>
         <div className="flex flex-col gap-4">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-2/3" />
         </div>
      </div>
   );
}

export { PostDetailsSkeleton };
