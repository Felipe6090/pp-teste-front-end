import { useContext } from "react";
import Image from "next/image";

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
          <S.HeadColumn width="163.5px">Cargo</S.HeadColumn>
          <S.HeadColumn width="191.5px">Departamento</S.HeadColumn>
          <S.HeadColumn width="456px" lastChild>
            Colaboradores
          </S.HeadColumn>
        </S.TableHead>

        <S.TableBody>
          {rolesData.map((role) => {
            return (
              <S.BodyRow key={Math.random()} status="active">
                <S.BodyColumn width="163.5px">{role.name}</S.BodyColumn>
                <S.BodyColumn width="191.5px">{role.departament}</S.BodyColumn>
                <S.BodyColumn width="456px">
                  {role.agents_quantity}
                </S.BodyColumn>

                <Image
                  src="/more-vertical.png"
                  alt="More options button"
                  layout="fixed"
                  width={24}
                  height={24}
                  style={{ cursor: "pointer" }}
                />
              </S.BodyRow>
            );
          })}
        </S.TableBody>
      </S.Table>
    </>
  );
}
