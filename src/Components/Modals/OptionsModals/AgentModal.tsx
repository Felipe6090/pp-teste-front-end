import * as S from "./styles";

import Link from "next/link";

import Backdrop from "@mui/material/Backdrop";

type IType = {
  isOpen: boolean;
  onClose: () => void;
  position: { x: number; y: number };
  id: number;
};

export default function AgentModal({ isOpen, onClose, position, id }: IType) {
  return (
    <S.ModalMain
      open={isOpen}
      onClose={onClose}
      position={position}
      disableScrollLock
    >
      <S.ModalDiv>
        <Link href={`agents/${id}`}>
          <S.Options image="eye.png">Ver colaborador</S.Options>
        </Link>

        <S.Options image="trash-2.png" onClick={() => onClose()}>
          Excluir
        </S.Options>
      </S.ModalDiv>
    </S.ModalMain>
  );
}
