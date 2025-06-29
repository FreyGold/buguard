import { Post as PostType } from "@/types/post.type";
import Post from "../ui/Post";
import { Reveal } from "../ui/Reveal";

function Recent({ recentPosts }: { recentPosts: PostType[] }) {
   return (
      <div>
         <Reveal>
            <h3 className="text-2xl mb-4">Recent Blog Posts</h3>
         </Reveal>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2 lg:col-span-1">
               <Post post={recentPosts[0]} direction="vertical" />
            </div>

            <div className="flex flex-col gap-8 md:col-span-2 lg:col-span-1  mb-6">
               <Post post={recentPosts[1]} direction="horizontal" />
               <Post post={recentPosts[2]} direction="horizontal" />
            </div>

            <div className="md:col-span-2 lg:col-span-3">
               <Post post={recentPosts[3]} direction="vertical" />
            </div>
         </div>
      </div>
   );
}

export default Recent;
