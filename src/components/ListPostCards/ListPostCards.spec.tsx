import { render, screen } from "@testing-library/react";

import ListPostCards from ".";
import PostProps from "@/types/post";

const mockPosts = [
  {
    id: 1,
    title: "First Post",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at.",
  },
  {
    id: 2,
    title: "Second Post",
    body: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
] as PostProps[];

describe("<ListPostCards/>", () => {
  it("should be able to render ListPostCards component", () => {
    render(<ListPostCards posts={mockPosts} />);

    expect(screen.getByTestId("list-post-cards")).toBeInTheDocument();
  });

  it("should render all post cards with default substring", () => {
    render(<ListPostCards posts={mockPosts} />);

    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(mockPosts.length);

    mockPosts.forEach((post) => {
      expect(screen.getByText(post.title)).toBeInTheDocument();
      expect(
        screen.getByText(post.body.substring(0, 80) + "...")
      ).toBeInTheDocument();
    });
  });

  it("should apply custom substring length if provided", () => {
    render(<ListPostCards posts={mockPosts} customSubstring={10} />);

    mockPosts.forEach((post) => {
      const expectedBody = post.body.substring(0, 10) + "...";
      expect(screen.getByText(expectedBody)).toBeInTheDocument();
    });
  });
});
