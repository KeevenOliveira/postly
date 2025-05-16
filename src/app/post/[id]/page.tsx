import { getPost, getUser, getPostComments } from "@/lib/api";

interface PostPageProps {
  params: { id: string };
}

export default async function PostPage({ params }: PostPageProps) {
  const postId = params.id;

  const [post, comments] = await Promise.all([
    getPost(postId),
    getPostComments(postId),
  ]);

  const user = await getUser(post.userId);

  return (
    <main className="max-w-2xl mx-auto px-4 py-10 bg-white rounded-xl shadow-md">
      <h1 className="text-3xl font-bold mb-2">Postly</h1>
      <p className="text-gray-500 mb-6">
        A simple and <span className="font-semibold">elegant</span> blog reader
        built with Next.js.
      </p>

      <hr className="mb-6" />

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
        <p className="text-gray-700">{post.body}</p>
        <p className="mt-4 font-medium"> {user.name}</p>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4">Comments</h3>
        <div className="space-y-3">
          {comments.map((comment) => (
            <div
              key={comment.id}
              className="border border-gray-200 rounded-md p-3 bg-white text-gray-800"
            >
              <p className="font-semibold">{comment.name}</p>
              <p className="text-sm text-gray-600">{comment.body}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
