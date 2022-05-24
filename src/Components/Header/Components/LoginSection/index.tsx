import Image from "next/image";

import * as S from "./style";
import * as T from "../../../Foundations/Typography";

export default function Header() {
  return (
    <S.MainDiv>
      <Image
        src="/Avatars.png"
        alt="Brand Image"
        layout="fixed"
        width={32}
        height={32}
      />

      <S.TextDiv>
        <T.SemiBoldPoppins>Luiz Zlochevsky</T.SemiBoldPoppins>
        <T.RegularPoppins>meus dados</T.RegularPoppins>
      </S.TextDiv>
    </S.MainDiv>
  );
}
