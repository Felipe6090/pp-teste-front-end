import { IRoles } from "../../../../Types/Api";
import Image from "next/image";

import * as S from "./style";
import * as U from "../../../Foundations/Utils";
import * as TE from "../../../Foundations/TablesElements";
import { useState } from "react";

type IProps = {
  data: IRoles;
  modalHandler: (e: any) => void;
};

export default function RolesCollapseComponent({ data, modalHandler }: IProps) {
  const status = "active";

  const [collapseHandler, setCollapseHandler] = useState(true);

  return (
    <S.MainDiv collapsed={collapseHandler}>
      <U.DefaultRow
        justifyContent="space-between"
        onClick={() => setCollapseHandler(!collapseHandler)}
        gap="0"
      >
        <U.DefaultColumn width="auto" gap="2px;">
          <TE.HeadColumn width="auto">Cargo</TE.HeadColumn>

          <S.FildInfo status={status}>{data.name}</S.FildInfo>
        </U.DefaultColumn>

        <U.DefaultColumn width="auto" gap="2px;" collapsed={collapseHandler}>
          <TE.HeadColumn width="auto">Departamento</TE.HeadColumn>

          <S.FildInfo status={status}>{data.departament}</S.FildInfo>
        </U.DefaultColumn>

        <Image
          src={collapseHandler ? "/arrow-up.png" : "/arrow-down.png"}
          alt="More options button"
          layout="fixed"
          width={24}
          height={24}
          style={{ cursor: "pointer" }}
        />
      </U.DefaultRow>

      <U.DefaultColumn width="auto" gap="2px;" collapsed={collapseHandler}>
        <TE.HeadColumn width="auto">Colaboradores</TE.HeadColumn>

        <S.FildInfo status={status}>{data.agents_quantity}</S.FildInfo>
      </U.DefaultColumn>

      <S.ActionsButton
        onClick={(e) => modalHandler(e)}
        collapsed={collapseHandler}
      >
        Ações
      </S.ActionsButton>
    </S.MainDiv>
  );
}
