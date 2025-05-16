const BASE_URL = "https://jsonplaceholder.typicode.com";

export async function getPosts() {
  return fetch(`${BASE_URL}/posts`).then((res) => res.json());
}

export async function getPost(id: string) {
  return fetch(`${BASE_URL}/posts/${id}`).then((res) => res.json());
}

export async function getPostComments(postId: string) {
  return fetch(`${BASE_URL}/posts/${postId}/comments`).then((res) =>
    res.json()
  );
}

export async function getUser(userId: string) {
  return fetch(`${BASE_URL}/users/${userId}`).then((res) => res.json());
}
