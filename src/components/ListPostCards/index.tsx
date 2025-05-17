import Link from "next/link";

import PostProps from "@/types/post";

interface ListPostCardsProps {
  posts: PostProps[];
  customSubstring?: number;
}

const ListPostCards = ({ posts, customSubstring = 80 }: ListPostCardsProps) => {
  return (
    <div data-testid="list-post-cards" className="space-y-4">
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
            {post?.body?.substring(0, customSubstring)}...
          </p>
        </Link>
      ))}
    </div>
  );
};

export default ListPostCards;
