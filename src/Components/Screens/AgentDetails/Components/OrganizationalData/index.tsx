import * as S from "./style";
import * as T from "../../../../Foundations/Typography";

import Mock from "./Mocks";

type IProps = {
  cardName: string;
  cardInfo: string;
  img: string;
};

export default function OrganizationalData() {
  return (
    <S.MainDiv>
      <T.RegularPoppins fontSize="18px">Dados organizacionais</T.RegularPoppins>

      <S.DatasColumn>
        <S.SelectDiv>
          <S.Label>Departamento</S.Label>
          <S.DataSelect defaultValue={"Comercial"}>
            {Mock.departaments.map((departament) => (
              <S.DataOptions value={departament} key={Math.random()}>
                {departament}
              </S.DataOptions>
            ))}
          </S.DataSelect>
        </S.SelectDiv>
      </S.DatasColumn>
    </S.MainDiv>
  );
}
