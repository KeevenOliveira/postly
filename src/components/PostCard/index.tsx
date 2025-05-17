import Link from "next/link";
import PostProps from "@/types/post";
import Image from "next/image";

interface PostCardProps extends PostProps {
  customSubstring?: number;
}

const PostCard = ({ id, title, body, customSubstring = 80 }: PostCardProps) => {
  return (
    <Link
      key={id}
      href={`/post/${id}`}
      className="flex items-center justify-between border border-gray-200 rounded-md p-4 hover:bg-gray-50 transition"
    >
      <div className="flex flex-col">
        <h2 className="text-lg font-semibold text-gray-900 mb-1">{title}</h2>
        <p className="text-gray-600 text-sm">
          {body.substring(0, customSubstring)}...
        </p>
      </div>

      <Image
        src="/post/arrow-right.svg"
        alt="Arrow right"
        width={24}
        height={24}
        className="text-gray-500 ml-2"
        aria-hidden="true"
      />
    </Link>
  );
};

export default PostCard;
