import PostDetails from "@/components/pages/PostDetails";

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
