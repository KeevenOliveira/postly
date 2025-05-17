import Comment from "../Comment";
import CommentProps from "@/types/comment";

interface ListCommentsProps {
  comments: CommentProps[] | null;
}

const ListComments = ({ comments }: ListCommentsProps) => {
  return (
    <section>
      <h3 className="text-xl font-semibold mb-4">
        {comments?.length} Comments
      </h3>
      <div className="space-y-3">
        {comments?.map((comment: CommentProps) => (
          <Comment key={comment.id} {...comment} />
        ))}
      </div>
    </section>
  );
};

export default ListComments;
