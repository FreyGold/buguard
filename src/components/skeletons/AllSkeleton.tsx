import { Reveal } from "../ui/Reveal";
import PostSkeleton from "./PostSkeleton";

function AllSkeleton() {
   return (
      <div>
         <h3 className="text-2xl">All Blog Posts</h3>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
               <PostSkeleton direction="vertical" key={i} />
            ))}
         </div>
      </div>
   );
}

export default AllSkeleton;
