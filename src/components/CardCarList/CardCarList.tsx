import CardCar from "../CardCar/CardCar";
import * as S from './styles'

type CardCarListProps = {
  brand: string;
  carName: string;
  priceToDay: number;
  photoUrl: string;
};

type CarsProps = {
  cars: CardCarListProps[];
};

export default function CardCarList({ cars }: CarsProps) {
  return (
    <S.CardCarContainer>
      {cars.map((car) => (
        <CardCar
          key={car.carName}
          brand={car.brand}
          carName={car.carName}
          priceToDay={car.priceToDay}
          photoUrl={car.photoUrl}
        />
      ))}
    </S.CardCarContainer>
  );
}
