import Link from "next/link";

import { getPost, getUser, getPostComments } from "@/lib/api";
import ListComments from "@/components/ListComments";
import BackButton from "@/components/BackButton";

interface PostPageProps {
  params: Promise<{ id: string }>;
}

export default async function PostPage({ params }: PostPageProps) {
  const { id: postId } = await params;

  const [post, comments] = await Promise.all([
    getPost(postId),
    getPostComments(postId),
  ]);

  if (!post) {
    return <p className="text-red-500">Erro ao carregar este post.</p>;
  }

  const user = await getUser(String(post?.userId));

  return (
    <main className="max-w-6xl mx-auto px-4 py-10 bg-white rounded-xl">
      <BackButton />

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
        <p className="text-gray-700">{post.body}</p>
        <Link
          className="text-blue-700 underline mt-4 font-medium"
          href={`/user/${user?.id}`}
        >
          {user?.name}
        </Link>
      </section>

      <ListComments comments={comments} />
    </main>
  );
}
