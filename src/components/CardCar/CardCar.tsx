import Image from "next/image";

import AudiSvg from "../../../public/images/cars/Audi.svg";
import * as S from "./styles";

export default function CardCar() {
  return (
    <S.Container>
      <S.Content>
        <S.InfoContainer>
            <div>
                <S.InfoTitle>Audi</S.InfoTitle>
                <S.InfoContent>RS 5 Coupé</S.InfoContent>
            </div>
            <div>
                <S.InfoTitle>Ao dia</S.InfoTitle>
                <S.InfoContent price>R$ 120</S.InfoContent>
            </div>
        </S.InfoContainer>
        <div>
          <Image src={AudiSvg} alt="Car photo" />
        </div>
      </S.Content>
    </S.Container>
  );
}
