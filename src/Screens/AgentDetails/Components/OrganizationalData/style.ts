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
  border: solid 1px #587169;
  border-radius: 5px;

  position: relative;

  min-height: 56px;
  width: 100%;

  padding: 0 20px;

  background-color: #f5faf8;

  display: flex;
  align-items: center;

  cursor: pointer;
`;

export const DataSelect = styled.select`
  border: none;
  outline: 0;

  font-family: "Poppins", sans-serif;
  font-size: 16px;

  color: #587169;

  background-color: #f5faf8;

  width: 100%;
`;

export const DataOptions = styled.option``;

export const Label = styled.label`
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  color: #a3b8b0;

  background: linear-gradient(#fff 50%, #f5faf8 50%);

  position: absolute;
  padding: 0 5px;

  transform: translate(0, -30px);
`;
