"use client";
import useGetPost from "@/hooks/useGetPost";
import Image from "next/image";
import { PostDetailsSkeleton } from "../skeleton/PostDetailsSkeleton";

function PostDetails({ postId }: { postId: string }) {
   const {
      data: data,
      isLoading: isLoading,
      isError: isError,
   } = useGetPost(postId);

   if (isLoading) return <PostDetailsSkeleton />;

   if (
      isError ||
      !data ||
      typeof data.title !== "string" ||
      typeof data.body !== "string"
   ) {
      throw new Error("Post not found");
   }

   const { title, body } = data;
   const randomImage = Math.ceil(Math.random() * 10);
   return (
      <div className="flex w-full h-screen px-8 py-5 gap-8 flex-col">
         <h5 className=" text-lg text-[#6941C6]">Sunday , 1 Jan 2023</h5>
         <h2 className="font-bold text-4xl leading-9">{title.toUpperCase()}</h2>
         <div className="relative aspect-video">
            <Image
               src={`/${randomImage}.jpg`}
               alt="placeholder"
               fill
               className="object-cover"
            />
         </div>
         <p className="">{body}</p>
      </div>
   );
}

export default PostDetails;
