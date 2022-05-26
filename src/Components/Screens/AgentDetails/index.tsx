import * as S from "./style";
import * as T from "../../Foundations/Typography";

import Image from "next/image";
import CardComponent from "./Components/CardsComponents";
import OrganizationalData from "./Components/OrganizationalData";

export default function AgentDetailsScreen() {
  return (
    <S.MainDiv>
      <T.SemiBoldPoppins fontSize="32px">
        Detalhes do colaborador
      </T.SemiBoldPoppins>

      <S.AvatarDiv>
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
      </S.AvatarDiv>

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
    </S.MainDiv>
  );
}
