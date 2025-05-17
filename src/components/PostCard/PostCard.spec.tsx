import { render, screen } from "@testing-library/react";

import PostProps from "@/types/post";
import PostCard from ".";

const mockPost = {
  id: 1,
  title: "Test Post",
  body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto",
} as PostProps;
describe("<PostCard/>", () => {
  it("should render the post title and body", () => {
    render(<PostCard {...mockPost} />);

    expect(screen.getByText(mockPost.title)).toBeInTheDocument();
    expect(
      screen.getByText(mockPost.body.substring(0, 80) + "...")
    ).toBeInTheDocument();
  });

  it("should render a link to the correct post URL", () => {
    render(<PostCard {...mockPost} />);

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", `/post/${mockPost.id}`);
  });

  it("should have expected class names for styling", () => {
    render(<PostCard {...mockPost} />);

    const link = screen.getByRole("link");
    expect(link).toHaveClass(
      "block",
      "border",
      "rounded-md",
      "hover:bg-gray-50"
    );
  });
});
