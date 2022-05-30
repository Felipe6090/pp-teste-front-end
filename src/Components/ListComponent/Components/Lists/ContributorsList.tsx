import { useContext, useState } from "react";
import Image from "next/image";

import { ContributorsContext } from "../../../../Contexts/ContributorsContext";

import AgentModal from "../../../Modals/OptionsModals/AgentModal";

import * as U from "../../../Foundations/Utils";
import * as T from "../../../Foundations/Typography";
import * as TE from "../../../Foundations/TablesElements";
import ContributorsCollapseComponent from "../CollapseComponent/ContributorsCollapseComponent";

export default function ContributorsList() {
  const { contributorsData } = useContext(ContributorsContext);

  const [modalController, setModalController] = useState(false);

  const [id, setId] = useState(0);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  return (
    <>
      <T.SemiBoldPoppins fontSize="16px">
        Listagem de colaboradores
      </T.SemiBoldPoppins>

      <TE.ResponsiveTable>
        {contributorsData.map((item) => (
          <ContributorsCollapseComponent
            modalHandler={(e) => {
              setMousePosition({ x: e.clientX, y: e.clientY });
              setId(item.agent_id);
              setModalController(!modalController);
            }}
            data={item}
            key={item.agent_id}
          />
        ))}

        <TE.LoadMore>Carregar Mais</TE.LoadMore>
      </TE.ResponsiveTable>

      <U.DefaultColumn table alignSelf="center">
        <TE.TableHead>
          <TE.HeadColumn width="25%">Nome Completo</TE.HeadColumn>
          <TE.HeadColumn width="15%">Departamento</TE.HeadColumn>
          <TE.HeadColumn width="15%">Cargo</TE.HeadColumn>
          <TE.HeadColumn width="20%">Unidade</TE.HeadColumn>
          <TE.HeadColumn width="25%" lastChild>
            Status
          </TE.HeadColumn>
        </TE.TableHead>

        <TE.TableBody>
          {contributorsData.map((item) => {
            return (
              <TE.BodyRow key={item.agent_id} status={item.status}>
                <TE.BodyColumn width="25%" avatar={item.image}>
                  {item.name}
                </TE.BodyColumn>
                <TE.BodyColumn width="15%">{item.department}</TE.BodyColumn>
                <TE.BodyColumn width="15%">{item.role}</TE.BodyColumn>
                <TE.BodyColumn width="20%">{item.branch}</TE.BodyColumn>
                <TE.StatusDiv>
                  {item.status === "active" ? (
                    <TE.ActivedLabel>Ativo</TE.ActivedLabel>
                  ) : (
                    <TE.InactiveLabel>Inativo</TE.InactiveLabel>
                  )}

                  <Image
                    src="/more-vertical.png"
                    alt="More options button"
                    layout="fixed"
                    width={24}
                    height={24}
                    style={{ cursor: "pointer" }}
                    onClick={(e) => {
                      setMousePosition({ x: e.clientX, y: e.clientY });
                      setId(item.agent_id);
                      setModalController(!modalController);
                    }}
                  />
                </TE.StatusDiv>
              </TE.BodyRow>
            );
          })}
        </TE.TableBody>
      </U.DefaultColumn>

      <AgentModal
        isOpen={modalController}
        onClose={() => setModalController(!modalController)}
        position={mousePosition}
        id={id}
      />
    </>
  );
}
