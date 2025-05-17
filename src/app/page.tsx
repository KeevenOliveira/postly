import { getPosts } from "@/lib/api";
import ListPostCards from "@/components/ListPostCards";

export default async function HomePage() {
  const posts = await getPosts();

  return (
    <main className="max-w-6xl mx-auto">
      <div className="bg-white rounded-xl  p-6">
        <h1 className="text-3xl font-bold mb-5">The latest news</h1>

        <ListPostCards posts={posts} customSubstring={140} />
      </div>
    </main>
  );
}
