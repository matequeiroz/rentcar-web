import { BiHomeAlt2, BiCar, BiUser } from "react-icons/bi";

import * as S from './styles'

export function MenuNavigation() {
  return (
    <S.Container>
      <nav>
        <ul>
          <li>
            <BiHomeAlt2 size={22} />
          </li>
          <li>
            <BiCar size={22} />
          </li>
          <li> 
            <BiUser size={22} />
          </li>
        </ul>
      </nav>
    </S.Container>
  );
}
