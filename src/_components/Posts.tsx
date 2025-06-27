import { Post } from "@/types/post.type";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";

function getRandomTags() {
   const tags = [
      "Presentation",
      "Business",
      "Logic",
      "Tech",
      "Podcasts",
      "Design",
      "Research",
      "Frameworks",
   ];
   const count = Math.floor(Math.random() * 3) + 1; // 1 to 3 tags
   const shuffled = tags.sort(() => 0.5 - Math.random());
   return shuffled.slice(0, count);
}

function getRandomColor(): string {
   const colors = [
      "bg-purple-100 text-purple-700",
      "bg-blue-100 text-blue-700",
      "bg-pink-100 text-pink-700",
      "bg-green-100 text-green-700",
      "bg-yellow-100 text-yellow-700",
      "bg-red-100 text-red-700",
      "bg-gray-100 text-gray-700",
   ];
   return colors[Math.floor(Math.random() * colors.length)];
}

function Posts({ post }: { post: Post }) {
   const { title, body } = post;
   const randomTags = getRandomTags();
   console.log(randomTags);
   return (
      <div className="flex gap-9 flex-col font-semibold">
         <Image
            src={"https://placehold.co/600x400/png"}
            alt="placeholder"
            width={400}
            height={400}
         />
         <h5 className=" text-lg text-[#6941C6]">Sunday , 1 Jan 2023</h5>
         <div className="flex justify-between items-center">
            <h2 className="text-2xl">{title}</h2>
            <FiArrowUpRight size={"40px"} />
         </div>
         <h6 className="font-normal text-[#667085] text-base leading-6 tracking-wide">
            {body}
         </h6>
         <div className="flex gap-2 text-sm leading-6 tracking-wide font-medium">
            <div className="flex gap-2 text-sm leading-6 tracking-wide font-medium">
               {randomTags.map((tag) => (
                  <span
                     key={tag}
                     className={` h-[24px] flex items-center justify-center rounded-3xl px-3 py-1 mix-blend-multiply ${getRandomColor()}`}>
                     {tag}
                  </span>
               ))}
            </div>
         </div>
      </div>
   );
}

export default Posts;
