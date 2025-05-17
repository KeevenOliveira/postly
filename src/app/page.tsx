import Link from "next/link";

import { getPosts } from "@/lib/api";
import PostProps from "@/types/post";

export default async function HomePage() {
  const posts = await getPosts();

  return (
    <main className="max-w-6xl mx-auto">
      <div className="bg-white rounded-xl  p-6">
        <h1 className="text-3xl font-bold mb-5">The latest news</h1>

        <div className="space-y-4">
          {posts.map((post: PostProps) => (
            <Link
              key={post.id}
              href={`/post/${post.id}`}
              className="block border border-gray-200 rounded-md p-4 hover:bg-gray-50 transition"
            >
              <h2 className="text-lg font-semibold text-gray-900 mb-1">
                {post.title}
              </h2>
              <p className="text-gray-600 text-sm">
                {post.body.substring(0, 80)}...
              </p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
