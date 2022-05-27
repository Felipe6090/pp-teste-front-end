import * as S from "./style";
import * as T from "../../Foundations/Typography";

import ListComponent from "../../ListComponent";

export default function HomeScreen() {
  return (
    <S.MainDiv>
      <T.SemiBoldPoppins fontSize="32px">Organização</T.SemiBoldPoppins>

      <ListComponent />
    </S.MainDiv>
  );
}
