import { useContext } from "react";

import { RolesContext } from "../../../Contexts/RolesContext";

import * as S from "./style";
import * as T from "../../Foundations/Typography";

export default function RolesList() {
  const { rolesData } = useContext(RolesContext);

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
          {rolesData.map((role) => {
            return (
              <S.TableRow key={Math.random()}>
                <S.TD>{role.name}</S.TD>
                <S.TD>{role.department}</S.TD>
                <S.TD>{role.agents_quantity}</S.TD>
              </S.TableRow>
            );
          })}
        </S.TableBody>
      </S.Table>
    </>
  );
}
