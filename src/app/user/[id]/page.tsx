import { getUser, getPosts } from "@/lib/api";
import PostProps from "@/types/post";
import getInitialsCharactersByName from "@/utils/getInitialsCharactersByName";
import ListPostCards from "@/components/ListPostCards";
import BackButton from "@/components/BackButton";

interface UserPageProps {
  params: Promise<{ id: string }>;
}

export default async function UserPage({ params }: UserPageProps) {
  const { id: userId } = await params;
  const user = await getUser(userId);
  const allPosts = await getPosts();

  const userPosts = allPosts.filter(
    (post: PostProps) => post.userId === parseInt(userId)
  );

  return (
    <main className="max-w-5xl mx-auto px-4 py-12 text-white">
      <BackButton />
      <section className="flex flex-col items-center text-center mb-10">
        <div className="text-black w-[100px] h-[100px] rounded-full bg-[#6E9BFF] flex items-center justify-center text-3xl font-bold mx-auto md:mx-0 mb-4">
          {getInitialsCharactersByName(user.name)}
        </div>
        <h1 className="text-black text-3xl font-bold">{user.name}</h1>
        <p className="text-gray-400">Author</p>
      </section>
      <section>
        <h2 className="text-black  text-2xl font-semibold mb-6">
          {userPosts?.length} Posts
        </h2>
        <ListPostCards posts={allPosts} customSubstring={130} />
      </section>
    </main>
  );
}
