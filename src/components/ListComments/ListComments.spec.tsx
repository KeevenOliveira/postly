import { render, screen } from "@testing-library/react";

import CommentProps from "@/types/comment";
import ListComments from ".";

const mockComments = [
  {
    id: 1,
    body: "This is a comment",
    name: "John Doe",
  },
  {
    id: 2,
    body: "This is another comment",
    name: "Jane Doe",
  },
] as CommentProps[];
describe("<ListComments/>", () => {
  it("should render the correct number of comments", () => {
    render(<ListComments comments={mockComments} />);

    const commentElements = screen.getAllByText(/This is/i);
    expect(commentElements.length).toBe(mockComments.length);
  });

  it("should display the correct comment text and author", () => {
    render(<ListComments comments={mockComments} />);

    mockComments.forEach((comment) => {
      expect(screen.getByText(comment.body)).toBeInTheDocument();
      expect(screen.getByText(comment.name)).toBeInTheDocument();
    });
  });
});
