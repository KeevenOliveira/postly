import Header from ".";

import { render, screen } from "@testing-library/react";

describe("<Header/>", () => {
  it("should be able to render Header component", () => {
    render(<Header />);

    const header = screen.getByRole("banner");
    const logo = screen.getByAltText("Postly Logo");

    expect(header).toBeInTheDocument();
    expect(logo).toBeInTheDocument();
  });
});
