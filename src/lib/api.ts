import PostProps from "@/types/post";
import { fetchWithError } from "./fetchWithError";
import CommentProps from "@/types/comment";
import UserProps from "@/types/user";

const BASE_URL = "https://jsonplaceholder.typicode.com";

export async function getPosts() {
  return await fetchWithError<PostProps[]>(`${BASE_URL}/posts`, {
    next: { revalidate: 60 * 60 }, // 1 hour
  });
}

export async function getPost(id: string) {
  return await fetchWithError<PostProps>(`${BASE_URL}/posts/${id}`, {
    next: { revalidate: 60 * 60 }, // 1 hour
  });
}

export async function getPostComments(postId: string) {
  return await fetchWithError<CommentProps[]>(
    `${BASE_URL}/posts/${postId}/comments`,
    {
      cache: "no-store", //SSR
    }
  );
}

export async function getUser(userId: string) {
  return await fetchWithError<UserProps>(`${BASE_URL}/users/${userId}`, {
    cache: "no-store", //SSR
  });
}
