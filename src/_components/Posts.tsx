import { Post } from "@/types/post.type";
import Image from "next/image";
import Link from "next/link";
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
      "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-200",
      "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200",
      "bg-pink-100 text-pink-700 dark:bg-pink-900 dark:text-pink-200",
      "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200",
      "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-100",
      "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-200",
      "bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-200",
   ];
   return colors[Math.floor(Math.random() * colors.length)];
}

function Posts({
   post,
   direction = "vertical",
}: {
   post: Post;
   direction: "horizontal" | "vertical";
}) {
   const { title, id, body } = post;
   const randomTags = getRandomTags();
   const randomImage = Math.ceil(Math.random() * 10);

   return (
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
            <Image
               src={`/${randomImage}.jpg`}
               alt="placeholder"
               fill
               className="object-cover"
               sizes="(max-width: 768px) 100vw, 50vw"
            />
         </div>
         <div className="flex flex-col gap-4 flex-1 font-semibold justify-center">
            <h5 className="text-lg text-[#6941C6]">Sunday , 1 Jan 2023</h5>
            <Link
               href={`/posts/${id}`}
               className="flex justify-between items-center">
               <h2 className="text-2xl">{title.toUpperCase()}</h2>
               <div className="size-10 flex items-center justify-center">
                  <FiArrowUpRight size={30} />
               </div>
            </Link>
            <h6 className="font-normal text-[#667085] text-base leading-6 tracking-wide">
               {body}
            </h6>
            <div className="flex gap-2 text-sm leading-6 tracking-wide font-medium">
               {randomTags.map((tag) => (
                  <span
                     key={tag}
                     className={`h-[24px] flex items-center justify-center rounded-3xl px-3 py-1 ${getRandomColor()}`}>
                     {tag}
                  </span>
               ))}
            </div>
         </div>
      </div>
   );
}

export default Posts;
