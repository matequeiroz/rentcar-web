import Image from "next/image";

import * as S from './styles'

export default function Header() {
  return (
    <S.Header>
      <S.Content>
        <Image src={"/images/logo.svg"} alt="RentCar Logo" width={100} height={100} />
        <span>12 carros disponíveis</span>
      </S.Content>
    </S.Header>
  );
}
