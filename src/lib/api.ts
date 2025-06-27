export async function fetchPosts(page: number, perPage: number) {
   const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/?_start=${page}&_limit=${perPage}`
   );
   const posts: Post[] = await response.json(); // Parse the JSON body
   const total = Number(response.headers.get("X-Total-Count") || 0);
   return { posts, total };
}
