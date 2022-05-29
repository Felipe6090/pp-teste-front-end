import styled from "@emotion/styled";

type IStyled = {
  gap?: string;
};

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;

  border: 2px solid #eaefed;

  padding: 24px 24px;

  gap: 24px;
`;

export const SelectDiv = styled.div`
  position: relative;

  width: 100%;

  display: flex;
  align-items: center;
`;

export const DataSelect = styled.select`
  border: solid 1px #587169;
  border-radius: 5px;

  color: #587169;

  background-color: #f5faf8;

  outline: 0;

  padding: 0 20px;

  font-family: "Poppins", sans-serif;
  font-size: 16px;

  width: 100%;
  min-height: 56px;

  cursor: pointer;
`;

export const DataOptions = styled.option``;

export const Label = styled.label`
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  color: #a3b8b0;

  margin-left: 20px;

  background: linear-gradient(#fff 55%, #f5faf8 45%);

  position: absolute;
  padding: 0 2px;

  transform: translate(0, -30px);
`;
