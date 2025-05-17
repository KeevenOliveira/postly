import { render, screen, fireEvent } from "@testing-library/react";
import { useRouter } from "next/navigation";

import BackButton from ".";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("<BackButton />", () => {
  it("should render the back button with correct text", () => {
    (useRouter as jest.Mock).mockReturnValue({
      back: jest.fn(),
    });

    render(<BackButton />);
    expect(screen.getByRole("button", { name: /← Back/i })).toBeInTheDocument();
  });

  it("should call router.back when clicked", () => {
    const mockBack = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({
      back: mockBack,
    });

    render(<BackButton />);
    const button = screen.getByRole("button", { name: /← Back/i });
    fireEvent.click(button);

    expect(mockBack).toHaveBeenCalledTimes(1);
  });

  it("should have correct styling class", () => {
    (useRouter as jest.Mock).mockReturnValue({
      back: jest.fn(),
    });

    render(<BackButton />);
    const button = screen.getByRole("button", { name: /← Back/i });
    expect(button).toHaveClass("text-sm", "hover:underline", "flex");
  });
});
