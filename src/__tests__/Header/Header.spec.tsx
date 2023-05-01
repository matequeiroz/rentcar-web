import { render, screen } from "@testing-library/react";

import Header  from "@/components/Header/Header";

describe("Header.tsx", () => {

  it("should render the component", () => {
    const { container } = render(<Header />);
    expect(screen.getByTestId('Header-component')).toBeInTheDocument()
    expect(screen.getByRole("img")).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  });
});
