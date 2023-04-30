import { render } from "@testing-library/react";

import CardCar from "@/components/CardCar/CardCar";
import Audi from "../../../public/images/cars/Audi.svg";

describe("CardCar.tsx", () => {
  const mock = {
    brand: "Audi",
    carName: "RS 5 Coupé",
    priceToDay: 190,
    photoUrl: Audi,
  };

  it("should render the component", () => {
    const { container } =render(
      <CardCar
        brand={mock.brand}
        carName={mock.carName}
        photoUrl={mock.photoUrl}
        priceToDay={mock.priceToDay}
      />
    );

    expect(container).toMatchSnapshot()
  });
});
