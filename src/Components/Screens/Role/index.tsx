import * as S from "./style";
import * as T from "../../Foundations/Typography";

import InputComponent from "./Components/InputComponents";
import PermissionsList from "./Components/PermissionsList";

export default function RoleRoleComponent() {
  return (
    <S.MainDiv>
      <T.SemiBoldPoppins fontSize="32">Dados do cargo</T.SemiBoldPoppins>

      <S.InputsDiv>
        <InputComponent value="SAC" label="Departamento" />

        <InputComponent value="Analista" label="Cargo" />
      </S.InputsDiv>

      <T.SemiBoldPoppins fontSize="32">Listagem de Permisões</T.SemiBoldPoppins>

      <PermissionsList />
    </S.MainDiv>
  );
}
