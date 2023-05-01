import Image from "next/image";

import * as S from './styles'

export default function Header() {
  return (
    <S.Header data-testid="Header-component">
      <S.Content>
        <Image src={"/images/logo.svg"} alt="RentCar Logo" width={150} height={100} />
      </S.Content>
    </S.Header>
  );
}
