import * as S from "./style";
import * as T from "../../../../Components/Foundations/Typography";

import Image from "next/image";

type IProps = {
  cardName: string;
  cardInfo: string;
  img: string;
};

export default function CardComponent({ cardName, cardInfo, img }: IProps) {
  return (
    <S.MainDiv>
      <Image src={img} alt="Card Image" layout="fixed" width={38} height={38} />

      <S.InfosColumn>
        <T.RegularPoppins fontSize="12px">{cardName}</T.RegularPoppins>

        <T.SemiBoldPoppins fontSize="14px">{cardInfo}</T.SemiBoldPoppins>
      </S.InfosColumn>
    </S.MainDiv>
  );
}
