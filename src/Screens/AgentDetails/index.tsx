import * as S from "./style";
import * as T from "../../Components/Foundations/Typography";
import * as U from "../../Components/Foundations/Utils";

import Image from "next/image";
import Link from "next/link";

import CardComponent from "./Components/CardsComponents";
import OrganizationalData from "./Components/OrganizationalData";

export default function AgentDetailsScreen() {
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

      <S.InfosSection>
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
              Mothra Fernandes
            </T.SemiBoldPoppins>

            <T.RegularPoppins fontSize="14px">
              motrhafernandes@gmail.com
            </T.RegularPoppins>
          </S.NameColumn>
        </U.DefaultRow>

        <T.SemiBoldPoppins fontSize="18px">
          Informações pessoais
        </T.SemiBoldPoppins>

        <S.PersonalInfosDiv>
          <CardComponent
            cardName="CPF"
            cardInfo="601 189 760 60"
            img="/cpf-icon.png"
          />

          <CardComponent
            cardName="CPF"
            cardInfo="601 189 760 60"
            img="/cpf-icon.png"
          />

          <CardComponent
            cardName="CPF"
            cardInfo="601 189 760 60"
            img="/cpf-icon.png"
          />
        </S.PersonalInfosDiv>

        <OrganizationalData />
      </S.InfosSection>
    </S.MainDiv>
  );
}
