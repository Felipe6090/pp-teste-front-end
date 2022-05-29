import * as S from "./styles";

import Link from "next/link";

type IType = {
  isOpen: boolean;
  onClose: () => void;
  position: { x: number; y: number };
  name: string;
};

export default function RolesModal({ isOpen, onClose, position, name }: IType) {
  return (
    <S.ModalMain open={isOpen} onClose={onClose} position={position}>
      <S.ModalDiv>
        <Link href={`/positions/${name}`}>
          <S.Options image="eye.png">Ver cargo</S.Options>
        </Link>

        <S.Options image="edit.png">Editar</S.Options>

        <S.Options image="duplicate.png">Duplicar</S.Options>

        <S.Options image="repeat.png" onClick={() => onClose()}>
          Excluir
        </S.Options>
      </S.ModalDiv>
    </S.ModalMain>
  );
}
