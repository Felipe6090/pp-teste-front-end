import Image from "next/image";
import { useRouter } from "next/router";

import { useState } from "react";

import * as S from "./style";
import * as T from "../../../Foundations/Typography";
import ScreenSelectionModal from "../../../Modals/ScreenSelectionModal";

export default function ScreenSelection() {
  const router = useRouter();

  const [modalController, setModalController] = useState(false);

  return (
    <S.MainDiv
      onClick={(e) => {
        setModalController(!modalController);
      }}
    >
      <T.MediumPoppins>
        {router.pathname === "/" ? "Colaboradores" : "Cargos"}
      </T.MediumPoppins>

      <Image
        src="/more-vertical.png"
        alt="More options button"
        layout="fixed"
        width={24}
        height={24}
        style={{ cursor: "pointer" }}
      />

      <ScreenSelectionModal
        isOpen={modalController}
        onClose={() => setModalController(!modalController)}
      />
    </S.MainDiv>
  );
}
