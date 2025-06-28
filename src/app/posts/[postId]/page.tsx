import PostDetails from "@/components/pages/PostDetails";
import { Metadata } from "next";

export const metadata: Metadata = {
   title: "Post Details",
   description:
      "Read in-depth articles, tutorials, and the latest news on cybersecurity, programming, and technology. Discover expert insights and tips on the Buguard Blog.",
   keywords: [
      "blog",
      "post",
      "cybersecurity",
      "programming",
      "technology",
      "tutorials",
      "news",
      "Buguard",
      "insights",
      "guides",
   ],
};

async function Page({
   params,
}: {
   params: Promise<{ [key: string]: string }>;
}) {
   const resolvedParams = await params;
   const { postId } = resolvedParams;
   return <PostDetails postId={postId} />;
}

export default Page;
