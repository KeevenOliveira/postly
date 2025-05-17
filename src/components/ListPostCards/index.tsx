import PostProps from "@/types/post";
import PostCard from "../PostCard";

interface ListPostCardsProps {
  posts: PostProps[] | null;
  customSubstring?: number;
}

const ListPostCards = ({ posts, customSubstring = 80 }: ListPostCardsProps) => {
  return (
    <div data-testid="list-post-cards" className="space-y-4">
      {posts?.map((post: PostProps) => (
        <PostCard key={post.id} {...post} customSubstring={customSubstring} />
      ))}
    </div>
  );
};

export default ListPostCards;
