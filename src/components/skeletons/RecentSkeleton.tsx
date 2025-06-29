import PostSkeleton from "./PostSkeleton";
import { Reveal } from "../ui/Reveal";

function RecentSkeleton() {
   return (
      <div>
         <h3 className="text-2xl">Recent Blog Posts</h3>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2 lg:col-span-1">
               <PostSkeleton direction="vertical" />
            </div>

            <div className="flex flex-col gap-8 md:col-span-2 lg:col-span-1 mb-6">
               <PostSkeleton direction="horizontal" />
               <PostSkeleton direction="horizontal" />
            </div>

            <div className="md:col-span-2 lg:col-span-3">
               <PostSkeleton direction="vertical" />
            </div>
         </div>
      </div>
   );
}

export default RecentSkeleton;
