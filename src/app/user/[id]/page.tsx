import Link from "next/link";

import { getUser, getPosts } from "@/lib/api";
import PostProps from "@/types/post";
import getInitialsCharactersByName from "@/utils/getInitialsCharactersByName";

interface UserPageProps {
  params: { id: string };
}

export default async function UserPage({ params }: UserPageProps) {
  const user = await getUser(params?.id);
  const allPosts = await getPosts();
  const userPosts = allPosts.filter(
    (post: PostProps) => post.userId === parseInt(params?.id)
  );

  return (
    <main className="max-w-3xl mx-auto px-4 py-12 text-white">
      <section className="flex flex-col items-center text-center mb-10">
        <div className="text-black w-[100px] h-[100px] rounded-full bg-black/10 flex items-center justify-center text-3xl font-bold mx-auto md:mx-0 mb-4">
          {getInitialsCharactersByName(user.name)}
        </div>
        <h1 className="text-black text-3xl font-bold">{user.name}</h1>
        <p className="text-gray-400">Author</p>
      </section>
      <section>
        <h2 className="text-black  text-2xl font-semibold mb-6">
          {userPosts?.length} Posts
        </h2>
        <div className="space-y-4">
          {userPosts.map((post: PostProps) => (
            <Link
              href={`/post/${post.id}`}
              className="block  border border-gray-200 rounded-md p-4  hover:bg-gray-50 transition"
              key={post.id}
            >
              <div key={post.id}>
                <h3 className=" text-black font-semibold text-lg mb-1">
                  {post.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {post.body.substring(0, 100)}...
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
