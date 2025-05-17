const BASE_URL = "https://jsonplaceholder.typicode.com";

export async function getPosts() {
  return fetch(`${BASE_URL}/posts`, {
    next: { revalidate: 60 * 60 }, // 1 hour
  }).then((res) => res.json());
}

export async function getPost(id: string) {
  return fetch(`${BASE_URL}/posts/${id}`, {
    next: { revalidate: 60 * 60 }, // 1 hour
  }).then((res) => res.json());
}

export async function getPostComments(postId: string) {
  return fetch(`${BASE_URL}/posts/${postId}/comments`, {
    cache: "no-store", //SSR
  }).then((res) => res.json());
}

export async function getUser(userId: string) {
  return fetch(`${BASE_URL}/users/${userId}`, {
    cache: "no-store", //SSR
  }).then((res) => res.json());
}
