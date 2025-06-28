import { Post } from "@/types/post.type";

export async function fetchPosts(page: number) {
   const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/?_start=${page}&_limit=10`
   );
   const posts: Post[] = await response.json(); // Parse the JSON body
   return posts;
}

export async function fetchPost(id: string): Promise<Post> {
   const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
   );
   const post: Post = await response.json(); // Parse the JSON body
   return post;
}
