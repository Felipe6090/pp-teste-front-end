import * as S from "./style";

type IProps = {
  value: string;
  label: string;
};

export default function InputComponent({ value, label }: IProps) {
  return (
    <S.MainDiv>
      <S.Label htmlFor={label}>{label}</S.Label>
      <S.Input name={label} type="text" value={value} disabled />
    </S.MainDiv>
  );
}
