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

  it("should have expected class names for layout", () => {
    render(<PostCard {...mockPost} />);
    const link = screen.getByRole("link");

    expect(link).toHaveClass(
      "flex",
      "items-center",
      "justify-between",
      "border",
      "rounded-md",
      "p-4",
      "hover:bg-gray-50",
      "transition"
    );
  });

  it("should render the arrow image with correct attributes", () => {
    render(<PostCard {...mockPost} />);
    const img = screen.getByRole("img", { hidden: true });

    expect(img).toHaveAttribute(
      "src",
      expect.stringContaining("arrow-right.svg")
    );
    expect(img).toHaveAttribute("alt", "Arrow right");
  });
});
