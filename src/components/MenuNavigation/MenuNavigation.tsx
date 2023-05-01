import { BiHomeAlt2, BiCar, BiUser } from "react-icons/bi";

import * as S from './styles'

export default function MenuNavigation() {
  return (
    <S.Container>
      <nav data-testid="MenuNavigation-component">
        <ul>
          <li data-testid="MenuNavigation-item__component">
            <BiHomeAlt2 size={22} />
          </li>
          <li data-testid="MenuNavigation-item__component">
            <BiCar size={22} />
          </li>
          <li data-testid="MenuNavigation-item__component"> 
            <BiUser size={22} />
          </li>
        </ul>
      </nav>
    </S.Container>
  );
}
