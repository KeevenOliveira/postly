import { render, screen } from "@testing-library/react";

import CommentProps from "@/types/comment";
import Comment from ".";

const mockProps = {
  id: 1,
  body: "This is a comment",
  name: "John Doe",
} as CommentProps;

describe("<Comment/>", () => {
  it("should render the comment body and name", () => {
    render(<Comment {...mockProps} />);

    expect(screen.getByText(mockProps.name)).toBeInTheDocument();
    expect(screen.getByText(mockProps.body)).toBeInTheDocument();
  });

  it("should render the user image with alt text", () => {
    render(<Comment {...mockProps} />);

    const image = screen.getByAltText("User");
    expect(image).toBeInTheDocument();
  });

  it("should use the correct image src", () => {
    render(<Comment {...mockProps} />);

    const image = screen.getByAltText("User") as HTMLImageElement;
    expect(image.src).toContain("/comment/person.svg");
  });
});
