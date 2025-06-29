import { Post as PostType } from "@/types/post.type";
import { Reveal } from "../ui/Reveal";
import Post from "../ui/Post";

function AllPosts({ paginatedPosts }: { paginatedPosts: PostType[] }) {
   return (
      <div>
         <Reveal>
            <h3 className="text-2xl mb-4">All Blog Posts</h3>
         </Reveal>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginatedPosts.slice(4).map((post: PostType) => (
               <Reveal direction="left" key={post.id}>
                  <Post post={post} key={post.id} direction="vertical" />
               </Reveal>
            ))}
         </div>
      </div>
   );
}

export default AllPosts;
