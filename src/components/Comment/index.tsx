import Image from "next/image";
import CommentProps from "@/types/comment";

const Comment = ({ id, body, name }: CommentProps) => {
  return (
    <div
      key={id}
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
        <p className="font-semibold">{name}</p>
        <p className="text-sm text-gray-600">{body}</p>
      </div>
    </div>
  );
};
export default Comment;
