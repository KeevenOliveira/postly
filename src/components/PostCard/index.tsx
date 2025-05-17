import Link from "next/link";
import PostProps from "@/types/post";

const PostCard = ({ id, body, title }: PostProps) => {
  return (
    <Link
      key={id}
      href={`/post/${id}`}
      className="block border border-gray-200 rounded-md p-4 hover:bg-gray-50 transition"
    >
      <h2 className="text-lg font-semibold text-gray-900 mb-1">{title}</h2>
      <p className="text-gray-600 text-sm">{body.substring(0, 80)}...</p>
    </Link>
  );
};

export default PostCard;
