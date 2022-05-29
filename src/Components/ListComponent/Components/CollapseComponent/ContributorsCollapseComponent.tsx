import { IRoles, IContributors } from "../../../../Types/Api";
import Image from "next/image";

import { MouseEventHandler, useState } from "react";

import * as S from "./style";
import * as U from "../../../Foundations/Utils";
import * as TE from "../../../Foundations/TablesElements";

type IProps = {
  data: IContributors;
  modalHandler: (e: any) => void;
};

export default function ContributorsCollapseComponent({
  data,
  modalHandler,
}: IProps) {
  const [collapseHandler, setCollapseHandler] = useState(true);

  return (
    <S.MainDiv collapsed={collapseHandler}>
      <U.DefaultColumn
        gap="2px;"
        onClick={() => setCollapseHandler(!collapseHandler)}
      >
        <TE.HeadColumn width="25%">Nome Completo</TE.HeadColumn>

        <U.DefaultRow justifyContent="space-between">
          <S.FildInfo status={data.status} avatar={data.image}>
            {data.name}
          </S.FildInfo>

          <Image
            src={collapseHandler ? "/arrow-up.png" : "/arrow-down.png"}
            alt="More options button"
            layout="fixed"
            width={24}
            height={24}
            style={{ cursor: "pointer" }}
          />
        </U.DefaultRow>
      </U.DefaultColumn>

      <U.DefaultRow justifyContent="space-between">
        <U.DefaultColumn collapsed={collapseHandler} gap="2px;">
          <TE.HeadColumn width="25%">Dapartamento</TE.HeadColumn>
          <S.FildInfo status={data.status}>{data.department}</S.FildInfo>
        </U.DefaultColumn>

        <U.DefaultColumn collapsed={collapseHandler} gap="2px;">
          <TE.HeadColumn width="25%">Cargo</TE.HeadColumn>
          <S.FildInfo status={data.status}>{data.role}</S.FildInfo>
        </U.DefaultColumn>
      </U.DefaultRow>

      <U.DefaultRow justifyContent="space-between">
        <U.DefaultColumn collapsed={collapseHandler} gap="2px;">
          <TE.HeadColumn width="25%">unidade</TE.HeadColumn>
          <S.FildInfo status={data.status}>Unidade 1</S.FildInfo>
        </U.DefaultColumn>

        <U.DefaultColumn collapsed={collapseHandler} gap="2px;">
          <TE.HeadColumn width="25%">Status</TE.HeadColumn>
          {data.status === "active" ? (
            <TE.ActivedLabel>Ativo</TE.ActivedLabel>
          ) : (
            <TE.InactiveLabel>Inativo</TE.InactiveLabel>
          )}
        </U.DefaultColumn>
      </U.DefaultRow>

      <S.ActionsButton
        onClick={(e) => modalHandler(e)}
        collapsed={collapseHandler}
      >
        Ações
      </S.ActionsButton>
    </S.MainDiv>
  );
}

/*

lembrar de citar o erro no layout de ter cinco campos

*/
