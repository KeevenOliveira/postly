import Link from "next/link";
import { getPosts } from "@/lib/api";

export default async function HomePage() {
  const posts = await getPosts();

  return (
    <main className="max-w-2xl mx-auto px-4 py-10">
      <div className="bg-white rounded-xl shadow-md p-6">
        <h1 className="text-3xl font-bold mb-2">Postly</h1>
        <p className="text-gray-500 mb-6">
          A simple and <span className="font-semibold">elegant</span> blog
          reader built with Next.js.
        </p>

        <hr className="mb-6" />

        <div className="space-y-4">
          {posts.map((post) => (
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
