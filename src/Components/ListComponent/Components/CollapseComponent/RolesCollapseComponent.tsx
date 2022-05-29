import { IRoles, IContributors } from "../../../../Types/Api";
import Image from "next/image";

import * as S from "./style";
import * as U from "../../../Foundations/Utils";
import * as T from "../../../Foundations/Typography";
import * as TE from "../../../Foundations/TablesElements";

type IProps = {
  data: IContributors;
};

export default function RolesCollapseComponent({ data }: IProps) {
  return (
    <S.MainDiv>
      <U.DefaultColumn>
        <U.DefaultColumn>
          <TE.HeadColumn width="25%">Nome Completo</TE.HeadColumn>

          <U.DefaultRow>
            <TE.BodyColumn width="25%" avatar={data.image}>
              {data.name}
            </TE.BodyColumn>

            <Image
              src={"/arrow-up.png"}
              alt="More options button"
              layout="fixed"
              width={24}
              height={24}
              style={{ cursor: "pointer" }}
              onClick={(e) => {}}
            />
          </U.DefaultRow>
        </U.DefaultColumn>

        <U.DefaultColumn>
          <TE.HeadColumn width="25%">Dapartamento</TE.HeadColumn>
          <TE.BodyColumn width="25%">{data.department}</TE.BodyColumn>
        </U.DefaultColumn>

        <U.DefaultColumn>
          <TE.HeadColumn width="25%">Cargo</TE.HeadColumn>
          <TE.BodyColumn width="25%">{data.role}</TE.BodyColumn>
        </U.DefaultColumn>

        <U.DefaultColumn>
          <TE.HeadColumn width="25%">unidade</TE.HeadColumn>
          <TE.BodyColumn width="25%">Unidade 1</TE.BodyColumn>
        </U.DefaultColumn>

        <U.DefaultColumn>
          <TE.HeadColumn width="25%">Nome Completo</TE.HeadColumn>
          <TE.BodyColumn width="25%">{data.status}</TE.BodyColumn>
        </U.DefaultColumn>
      </U.DefaultColumn>
    </S.MainDiv>
  );
}
