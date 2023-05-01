import { getAllByText, render, screen } from "@testing-library/react";

import Audi from "../../../public/images/cars/Audi.svg";
import Porche from "../../../public/images/cars/Porche.svg";
import CardCarList from "@/components/CardCarList/CardCarList";

describe("CardCarList.tsx", () => {
  const mock = [
    {
      brand: "Audi",
      carName: "RS 5 Coupé",
      priceToDay: 190,
      photoUrl: Audi,
    },
    {
      brand: "Porche",
      carName: "Panamera",
      priceToDay: 340,
      photoUrl: Porche,
    },
  ];

  it("should render the component with two <CardCar />", () => {
    const { container } = render(<CardCarList cars={mock} />);
    const rendering = screen.getAllByTestId('CardCar-component');
    expect(rendering.length).toBe(2);
    expect(screen.getAllByText(mock[0].brand));
    expect(screen.getAllByText(mock[0].carName));
    expect(screen.getAllByText(`R$ ${mock[0].priceToDay}`));

    expect(screen.getAllByText(mock[1].brand));
    expect(screen.getAllByText(mock[1].carName));
    expect(screen.getAllByText(`R$ ${mock[1].priceToDay}`));
    
    expect(screen.getAllByRole('img').length).toBe(2);

    expect(container).toMatchSnapshot()
  });
});
