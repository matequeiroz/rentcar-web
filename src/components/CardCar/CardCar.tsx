import Image from "next/image";

import * as S from "./styles";

type CardCarProps = {
  brand: string;
  carName: string;
  priceToDay: number;
  photoUrl: string;
};

export default function CardCar({ brand, carName, priceToDay, photoUrl }: CardCarProps) {
  return (
    <S.Container>
      <S.Content>
        <S.InfoContainer>
          <div>
            <S.InfoTitle>{brand}</S.InfoTitle>
            <S.InfoContent>{carName}</S.InfoContent>
          </div>
          <div>
            <S.InfoTitle>Ao dia</S.InfoTitle>
            <S.InfoContent price>R$ {priceToDay}</S.InfoContent>
          </div>
        </S.InfoContainer>
        <div>
          <Image src={photoUrl} alt="Car photo" width={180} height={100} priority />
        </div>
      </S.Content>
    </S.Container>
  );
}
