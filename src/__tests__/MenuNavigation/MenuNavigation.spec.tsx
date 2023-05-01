import { render, screen } from "@testing-library/react";

import MenuNavigation  from "@/components/MenuNavigation/MenuNavigation";

describe("MenuNavigation.tsx", () => {

  it("should render the component", () => {
    const { container } = render(<MenuNavigation />);
    expect(screen.getAllByTestId('MenuNavigation-component').length).toBe(1);
    expect(screen.getAllByTestId("MenuNavigation-item__component").length).toBe(3)
    expect(container).toMatchSnapshot()
  });
});
