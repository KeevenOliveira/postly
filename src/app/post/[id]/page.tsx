import Link from "next/link";

import { getPost, getUser, getPostComments } from "@/lib/api";
import ListComments from "@/components/ListComments";

interface PostPageProps {
  params: { id: string };
}

export default async function PostPage({ params }: PostPageProps) {
  const postId = params?.id;

  const [post, comments] = await Promise.all([
    getPost(postId),
    getPostComments(postId),
  ]);

  const user = await getUser(post.userId);

  return (
    <main className="max-w-6xl mx-auto px-4 py-10 bg-white rounded-xl">
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
        <p className="text-gray-700">{post.body}</p>
        <Link href={`/user/${user.id}`}>
          <p className="mt-4 font-medium"> {user.name}</p>
        </Link>
      </section>

      <ListComments comments={comments} />
    </main>
  );
}
