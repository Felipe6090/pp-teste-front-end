import { useContext } from "react";

import { RolesContext } from "../../../Contexts/RolesContext";

import * as S from "./style";
import * as T from "../../Foundations/Typography";

export default function RolesList() {
  const { rolesData } = useContext(RolesContext);

  console.log(rolesData);

  return (
    <>
      <T.SemiBoldPoppins fontSize="16px">Listagem de cargos</T.SemiBoldPoppins>

      <S.Table>
        <S.TableHead>
          <S.TableRow>
            <S.TH>Cargo</S.TH>
            <S.TH>Departamento</S.TH>
            <S.TH>Colaboradores</S.TH>
          </S.TableRow>
        </S.TableHead>

        <S.TableBody>
          <S.TableRow>
            <S.TD>Supervisor</S.TD>
            <S.TD>SAC</S.TD>
            <S.TD>2</S.TD>
          </S.TableRow>
        </S.TableBody>
      </S.Table>
    </>
  );
}
