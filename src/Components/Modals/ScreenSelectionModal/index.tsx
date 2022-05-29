import * as S from "./style";
import * as U from "../../Foundations/Utils";
import * as T from "../../Foundations/Typography";

import Link from "next/link";
import Image from "next/image";

type IType = {
  isOpen: boolean;
  onClose: () => void;
};

export default function ScreenSelectionModal({ isOpen, onClose }: IType) {
  return (
    <S.ModalMain open={isOpen} onClose={onClose} disableScrollLock>
      <S.ModalDiv>
        <U.DefaultRow justifyContent="space-between">
          <T.SemiBoldPoppins fontSize="18px">Categorias</T.SemiBoldPoppins>

          <Image
            src="/close-icon.png"
            alt="More options button"
            layout="fixed"
            width={24}
            height={24}
            onClick={() => onClose()}
          />
        </U.DefaultRow>

        <Link href="/">
          <S.Options>Colaboradores</S.Options>
        </Link>

        <Link href="/positions">
          <S.Options>Cargos</S.Options>
        </Link>
      </S.ModalDiv>
    </S.ModalMain>
  );
}
