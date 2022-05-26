import * as S from "./styles";

type IType = {
  isOpen: boolean;
  onClose: () => void;
};

export default function AgentModal({ isOpen, onClose }: IType) {
  return (
    <S.ModalMain open={isOpen} onClose={onClose}>
      <S.ModalDiv>
        <S.Options image="eye.png">Ver colaborador</S.Options>

        <S.Options image="trash-2.png" onClick={() => onClose()}>
          Excluir
        </S.Options>
      </S.ModalDiv>
    </S.ModalMain>
  );
}
