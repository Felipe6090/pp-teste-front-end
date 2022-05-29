import * as S from "./style";
import * as T from "../../../../Components/Foundations/Typography";
import * as U from "../../../../Components/Foundations/Utils";

import Mock from "./Mocks";

import { IContributorData } from "../../../../Types/Api";

type IProps = {
  agentData: IContributorData;
};

export default function OrganizationalData({ agentData }: IProps) {
  return (
    <S.MainDiv>
      <T.RegularPoppins fontSize="18px">Dados organizacionais</T.RegularPoppins>

      <U.DefaultRow>
        <S.SelectDiv>
          <S.Label>Departamento</S.Label>
          <S.DataSelect defaultValue={agentData.department}>
            {Mock.departaments.map((departament) => (
              <S.DataOptions value={departament} key={Math.random()}>
                {departament}
              </S.DataOptions>
            ))}
          </S.DataSelect>
        </S.SelectDiv>

        <S.SelectDiv>
          <S.Label>Cargo</S.Label>
          <S.DataSelect defaultValue={agentData.role}>
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
          <S.DataSelect defaultValue={agentData.branch}>
            {Mock.unitys.map((unity) => (
              <S.DataOptions value={unity} key={Math.random()}>
                {unity}
              </S.DataOptions>
            ))}
          </S.DataSelect>
        </S.SelectDiv>

        <S.SelectDiv>
          <S.Label>Status</S.Label>
          <S.DataSelect defaultValue={agentData.status}>
            <S.DataOptions value="Ativo">Ativo</S.DataOptions>

            <S.DataOptions value="Inativo">Inativo</S.DataOptions>
          </S.DataSelect>
        </S.SelectDiv>
      </U.DefaultRow>
    </S.MainDiv>
  );
}
