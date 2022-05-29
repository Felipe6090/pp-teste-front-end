import Image from "next/image";

import * as S from "./style";

import LoginSection from "./Components/LoginSection";

export default function Header() {
  return (
    <S.MainDiv>
      <S.HelperDiv>
        <Image
          src="/brand.png"
          alt="Brand Image"
          layout="fixed"
          width={36}
          height={35}
        />
      </S.HelperDiv>

      <LoginSection />
    </S.MainDiv>
  );
}
