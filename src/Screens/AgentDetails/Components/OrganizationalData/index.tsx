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
          <S.Label htmlFor="department">Departamento</S.Label>
          <S.DataSelect
            defaultValue={agentData.department}
            name="departament"
            id="departament"
          >
            {Mock.departaments.map((departament) => (
              <S.DataOptions value={departament} key={Math.random()}>
                {departament}
              </S.DataOptions>
            ))}
          </S.DataSelect>
        </S.SelectDiv>

        <S.SelectDiv>
          <S.Label htmlFor="role">Cargo</S.Label>
          <S.DataSelect defaultValue={agentData.role} name="role" id="role">
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
          <S.Label htmlFor="branch">Unidade</S.Label>
          <S.DataSelect
            defaultValue={agentData.branch}
            name="branch"
            id="branch"
          >
            {Mock.unitys.map((unity) => (
              <S.DataOptions value={unity} key={Math.random()}>
                {unity}
              </S.DataOptions>
            ))}
          </S.DataSelect>
        </S.SelectDiv>

        <S.SelectDiv>
          <S.Label htmlFor="status">Status</S.Label>
          <S.DataSelect
            defaultValue={agentData.status}
            name="status"
            id="status"
          >
            <S.DataOptions value="Ativo">Ativo</S.DataOptions>

            <S.DataOptions value="Inativo">Inativo</S.DataOptions>
          </S.DataSelect>
        </S.SelectDiv>
      </U.DefaultRow>
    </S.MainDiv>
  );
}
