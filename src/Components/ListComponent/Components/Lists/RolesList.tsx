import { useContext, useState } from "react";
import Image from "next/image";

import { RolesContext } from "../../../../Contexts/RolesContext";

import * as U from "../../../Foundations/Utils";
import * as T from "../../../Foundations/Typography";
import * as TE from "../../../Foundations/TablesElements";

import RolesModal from "../../../Modals/OptionsModals/RolesModal";

import RolesCollapseComponent from "../CollapseComponent/RolesCollapseComponent";

export default function RolesList() {
  const { rolesData } = useContext(RolesContext);

  const [modalController, setModalController] = useState(false);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const [name, setName] = useState("");

  const [itemsAmount, setItemsAmount] = useState(10);

  return (
    <>
      <T.SemiBoldPoppins fontSize="16px">Listagem de cargos</T.SemiBoldPoppins>

      <TE.ResponsiveTable>
        {rolesData.map((item) => (
          <RolesCollapseComponent
            modalHandler={(e) => {
              setMousePosition({ x: e.clientX, y: e.clientY });
              setName(item.name);
              setModalController(!modalController);
            }}
            data={item}
            key={Math.random()}
          />
        ))}

        <TE.LoadMore>Carregar Mais</TE.LoadMore>
      </TE.ResponsiveTable>

      <U.DefaultColumn table>
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

        <U.DefaultRow justifyContent="space-between" margin=" 30px 0 0 0">
          <U.DefaultRow alignItems="center">
            <T.RegularPoppins fontSize="16px" fontColor="#587169">
              {`Mostrando ${itemsAmount} de 50 registros`}
            </T.RegularPoppins>

            <TE.NumbersSelect
              defaultValue={itemsAmount}
              onChange={(e) => setItemsAmount(Number(e.target.value))}
            >
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={30}>30</option>
            </TE.NumbersSelect>
          </U.DefaultRow>

          <U.DefaultRow alignItems="center">
            <TE.PassArrows toLeft />
            <T.SemiBoldPoppins fontColor="#587169" fontSize="16px">
              1 de 10
            </T.SemiBoldPoppins>
            <TE.PassArrows />
          </U.DefaultRow>
        </U.DefaultRow>
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
