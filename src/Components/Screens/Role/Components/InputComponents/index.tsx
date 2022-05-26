import * as S from "./style";

type IProps = {
  placeholder: string;
  label: string;
};

export default function InputComponent({ placeholder, label }: IProps) {
  return (
    <S.MainDiv>
      <S.SearchLabel htmlFor={label}>{label}</S.SearchLabel>
      <S.SearchInput name={label} type="text" placeholder={placeholder} />
    </S.MainDiv>
  );
}
