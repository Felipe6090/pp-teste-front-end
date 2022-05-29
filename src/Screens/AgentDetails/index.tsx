import * as S from "./style";
import * as T from "../../Components/Foundations/Typography";
import * as U from "../../Components/Foundations/Utils";

import Image from "next/image";
import Link from "next/link";

import dayjs from "dayjs";

import CardComponent from "./Components/CardsComponents";
import OrganizationalData from "./Components/OrganizationalData";

import { IContributorData } from "../../Types/Api";
import { cpfMask } from "../../Utils/Masks";

type IProps = {
  agentData: IContributorData;
};

export default function AgentDetailsScreen({ agentData }: IProps) {
  return (
    <S.MainDiv>
      <U.DefaultRow gap="16px">
        <Link href="/">
          <Image
            src="/back-icon.png"
            alt="Back to Home"
            layout="fixed"
            width={36}
            height={36}
            style={{ cursor: "pointer" }}
          />
        </Link>

        <T.SemiBoldPoppins fontSize="32px">
          Detalhes do colaborador
        </T.SemiBoldPoppins>
      </U.DefaultRow>

      <U.DefaultTable>
        <U.DefaultRow margin="0 0 16px 0">
          <Image
            src="/avatar.png"
            alt="Avatar Image"
            layout="fixed"
            width={80}
            height={83}
          />

          <S.NameColumn>
            <T.SemiBoldPoppins fontSize="18px">
              {agentData.name}
            </T.SemiBoldPoppins>

            <T.RegularPoppins fontSize="14px">
              {agentData.email}
            </T.RegularPoppins>
          </S.NameColumn>
        </U.DefaultRow>

        <T.SemiBoldPoppins fontSize="18px">
          Informações pessoais
        </T.SemiBoldPoppins>

        <U.DefaultRow gap="24px" column>
          <CardComponent
            cardName="CPF"
            cardInfo={cpfMask(agentData.document.number)}
            img="/cpf-icon.png"
          />

          <CardComponent
            cardName="Telefone"
            cardInfo={`+${agentData.phone.ddi} ${agentData.phone.ddd} ${agentData.phone.number}`}
            img="/phone-icon.png"
          />

          <CardComponent
            cardName="Nascimento"
            cardInfo={dayjs(agentData.birth_date).format("DD/MM/YYYY")}
            img="/calendar-icon.png"
          />
        </U.DefaultRow>

        <OrganizationalData agentData={agentData} />
      </U.DefaultTable>
    </S.MainDiv>
  );
}
