import PostsPage from "@/components/pages/Posts";
import { Metadata } from "next";
import { Suspense } from "react";
import { FadeLoader } from "react-spinners";
export const metadata: Metadata = {
   title: "All Blog Posts",
   description:
      "Browse all blog posts on Buguard Blog. Find expert articles, tutorials, and the latest news on cybersecurity, programming, and technology.",
   keywords: [
      "blog",
      "posts",
      "cybersecurity",
      "programming",
      "technology",
      "tutorials",
      "news",
      "Buguard",
      "articles",
      "guides",
   ],
};

function Page() {
   return (
      <Suspense fallback={<FadeLoader />}>
         <PostsPage />
      </Suspense>
   );
}

export default Page;
