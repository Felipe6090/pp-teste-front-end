import { useContext, useState } from "react";
import Image from "next/image";

import { RolesContext } from "../../../Contexts/RolesContext";

import * as S from "./style";
import * as T from "../../Foundations/Typography";
import * as U from "../../Foundations/Utils";

import RolesModal from "../../Modals/RolesModal";

export default function RolesList() {
  const { rolesData } = useContext(RolesContext);

  const [modalController, setModalController] = useState(false);

  return (
    <>
      <T.SemiBoldPoppins fontSize="16px">Listagem de cargos</T.SemiBoldPoppins>

      <U.DefaultColumn>
        <S.TableHead>
          <S.HeadColumn width="25%">Cargo</S.HeadColumn>
          <S.HeadColumn width="25%">Departamento</S.HeadColumn>
          <S.HeadColumn width="50%" lastChild>
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
                  onClick={() => setModalController(!modalController)}
                />
              </S.BodyRow>
            );
          })}
        </S.TableBody>
      </U.DefaultColumn>

      <RolesModal
        isOpen={modalController}
        onClose={() => setModalController(!modalController)}
      />
    </>
  );
}
