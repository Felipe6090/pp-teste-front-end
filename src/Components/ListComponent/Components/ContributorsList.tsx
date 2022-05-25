import { useContext } from "react";
import Image from "next/image";

import { ContributorsContext } from "../../../Contexts/ContributorsContext";

import * as S from "./style";
import * as T from "../../Foundations/Typography";

export default function ContributorsList() {
  const { contributorsData } = useContext(ContributorsContext);

  return (
    <>
      <T.SemiBoldPoppins fontSize="16px">
        Listagem de colaboradores
      </T.SemiBoldPoppins>

      <S.Table>
        <S.TableHead>
          <S.HeadColumn width="196px">Nome Completo</S.HeadColumn>
          <S.HeadColumn width="124px">Departamento</S.HeadColumn>
          <S.HeadColumn width="96px">Cargo</S.HeadColumn>
          <S.HeadColumn width="142px">Unidade</S.HeadColumn>
          <S.HeadColumn width="182px" lastChild>
            Status
          </S.HeadColumn>
        </S.TableHead>

        <S.TableBody>
          {contributorsData.map((item) => {
            return (
              <S.BodyRow key={item.agent_id} status={item.status}>
                <S.BodyColumn width="196px" avatar={item.image}>
                  {item.name}
                </S.BodyColumn>
                <S.BodyColumn width="124px">{item.department}</S.BodyColumn>
                <S.BodyColumn width="96px">{item.role}</S.BodyColumn>
                <S.BodyColumn width="142px">{item.branch}</S.BodyColumn>
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
                  />
                </S.StatusDiv>
              </S.BodyRow>
            );
          })}
        </S.TableBody>
      </S.Table>
    </>
  );
}
