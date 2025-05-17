import Link from "next/link";
import Image from "next/image";

import CommentProps from "@/types/comment";
import { getPost, getUser, getPostComments } from "@/lib/api";

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

      <section>
        <h3 className="text-xl font-semibold mb-4">
          {comments?.length} Comments
        </h3>
        <div className="space-y-3">
          {comments.map((comment: CommentProps) => (
            <div
              key={comment.id}
              className="flex items-start border border-gray-200 rounded-md p-3 bg-white text-gray-800"
            >
              <div>
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-xs font-bold text-white mr-3">
                  <Image
                    src="/comment/person.svg"
                    alt="User"
                    width={100}
                    height={100}
                    className="w-8 h-8 rounded-full"
                  />
                </div>
              </div>

              <div>
                <p className="font-semibold">{comment.name}</p>
                <p className="text-sm text-gray-600">{comment.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
