import { useContext, useState } from "react";
import Image from "next/image";

import { RolesContext } from "../../../Contexts/RolesContext";

import * as U from "../../Foundations/Utils";
import * as T from "../../Foundations/Typography";
import * as TE from "../../Foundations/TablesElements";

import RolesModal from "../../Modals/OptionsModals/RolesModal";

export default function RolesList() {
  const { rolesData } = useContext(RolesContext);

  const [modalController, setModalController] = useState(false);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const [name, setName] = useState("");

  return (
    <>
      <T.SemiBoldPoppins fontSize="16px">Listagem de cargos</T.SemiBoldPoppins>

      <U.DefaultColumn>
        <TE.TableHead>
          <TE.HeadColumn width="25%">Cargo</TE.HeadColumn>
          <TE.HeadColumn width="25%">Departamento</TE.HeadColumn>
          <TE.HeadColumn width="50%" lastChild>
            Colaboradores
          </TE.HeadColumn>
        </TE.TableHead>

        <TE.TableBody>
          {rolesData.map((role) => {
            return (
              <TE.BodyRow key={Math.random()} status="active">
                <TE.BodyColumn width="25%">{role.name}</TE.BodyColumn>
                <TE.BodyColumn width="25%">{role.departament}</TE.BodyColumn>
                <TE.BodyColumn width="50%" justifyContent="space-between">
                  {role.agents_quantity}

                  <Image
                    src="/more-vertical.png"
                    alt="More options button"
                    layout="fixed"
                    width={24}
                    height={24}
                    style={{ cursor: "pointer" }}
                    onClick={(e) => {
                      setName(role.name);
                      setMousePosition({ x: e.clientX, y: e.clientY });
                      setModalController(!modalController);
                    }}
                  />
                </TE.BodyColumn>
              </TE.BodyRow>
            );
          })}
        </TE.TableBody>
      </U.DefaultColumn>

      <RolesModal
        isOpen={modalController}
        onClose={() => setModalController(!modalController)}
        position={mousePosition}
        name={name}
      />
    </>
  );
}
