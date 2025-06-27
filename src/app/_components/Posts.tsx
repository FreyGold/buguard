import Image from "next/image";
// { posts }: { posts: object[] }
function Posts() {
   return (
      <div className="grid grid-cols-1 gap-8">
         <div className="flex gap-6 flex-col">
            <Image
               src={"https://placehold.co/600x400/png"}
               alt="placeholder"
               width={400}
               height={400}
            />
         </div>
      </div>
   );
}

export default Posts;
