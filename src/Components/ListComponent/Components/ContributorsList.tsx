import { useContext, useState } from "react";
import Image from "next/image";

import { ContributorsContext } from "../../../Contexts/ContributorsContext";

import AgentModal from "../../Modals/AgentModal";

import * as S from "./style";
import * as U from "../../Foundations/Utils";
import * as T from "../../Foundations/Typography";

import { IContributorData } from "../../../Types/Api";

export default function ContributorsList() {
  const { contributorsData } = useContext(ContributorsContext);

  const [modalController, setModalController] = useState(false);

  const [id, setId] = useState(0);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  function showOptionsController(id: number) {}

  return (
    <>
      <T.SemiBoldPoppins fontSize="16px">
        Listagem de colaboradores
      </T.SemiBoldPoppins>

      <U.DefaultColumn alignSelf="center">
        <S.TableHead>
          <S.HeadColumn width="25%">Nome Completo</S.HeadColumn>
          <S.HeadColumn width="15%">Departamento</S.HeadColumn>
          <S.HeadColumn width="15%">Cargo</S.HeadColumn>
          <S.HeadColumn width="20%">Unidade</S.HeadColumn>
          <S.HeadColumn width="25%" lastChild>
            Status
          </S.HeadColumn>
        </S.TableHead>

        <S.TableBody>
          {contributorsData.map((item) => {
            return (
              <S.BodyRow key={item.agent_id} status={item.status}>
                <S.BodyColumn width="25%" avatar={item.image}>
                  {item.name}
                </S.BodyColumn>
                <S.BodyColumn width="15%">{item.department}</S.BodyColumn>
                <S.BodyColumn width="15%">{item.role}</S.BodyColumn>
                <S.BodyColumn width="20%">{item.branch}</S.BodyColumn>
                <S.StatusDiv>
                  {item.status === "active" ? (
                    <S.ActivedLabel>Ativo</S.ActivedLabel>
                  ) : (
                    <S.InactiveLabel>Inativo</S.InactiveLabel>
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
                </S.StatusDiv>
              </S.BodyRow>
            );
          })}
        </S.TableBody>
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
