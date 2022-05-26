import * as S from "./styles";

type IType = {
  isOpen: boolean;
  onClose: () => void;
};

export default function RolesModal({ isOpen, onClose }: IType) {
  return (
    <S.ModalMain open={isOpen} onClose={onClose}>
      <S.ModalDiv>
        <S.Options image="eye.png">Ver cargo</S.Options>

        <S.Options image="edit.png">Editar</S.Options>

        <S.Options image="duplicate.png">Duplicar</S.Options>

        <S.Options image="repeat.png" onClick={() => onClose()}>
          Excluir
        </S.Options>
      </S.ModalDiv>
    </S.ModalMain>
  );
}
