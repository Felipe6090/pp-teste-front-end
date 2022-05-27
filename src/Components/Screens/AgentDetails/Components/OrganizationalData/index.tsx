import * as S from "./style";
import * as T from "../../../../Foundations/Typography";
import * as U from "../../../../Foundations/Utils";

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

      <U.DefaultRow>
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

        <S.SelectDiv>
          <S.Label>Cargo</S.Label>
          <S.DataSelect defaultValue={"Gerente"}>
            {Mock.roles.map((role) => (
              <S.DataOptions value={role} key={Math.random()}>
                {role}
              </S.DataOptions>
            ))}
          </S.DataSelect>
        </S.SelectDiv>
      </U.DefaultRow>

      <U.DefaultRow>
        <S.SelectDiv>
          <S.Label>Unidade</S.Label>
          <S.DataSelect defaultValue={"Unidade 1"}>
            {Mock.unitys.map((unity) => (
              <S.DataOptions value={unity} key={Math.random()}>
                {unity}
              </S.DataOptions>
            ))}
          </S.DataSelect>
        </S.SelectDiv>

        <S.SelectDiv>
          <S.Label>Status</S.Label>
          <S.DataSelect defaultValue={"Ativo"}>
            <S.DataOptions value="Ativo">Ativo</S.DataOptions>

            <S.DataOptions value="Inativo">Inativo</S.DataOptions>
          </S.DataSelect>
        </S.SelectDiv>
      </U.DefaultRow>
    </S.MainDiv>
  );
}
