import styled from "@emotion/styled";

export const MainDiv = styled.div`
  border: solid 1px #587169;
  border-radius: 5px;

  position: relative;

  min-height: 56px;
  width: 40%;

  padding: 0 20px;

  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  border: none;
  outline: 0;

  font-family: "Poppins", sans-serif;
  font-size: 16px;

  color: #587169;

  width: 100%;

  background-color: #fff;
`;

export const Label = styled.label`
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  color: #a3b8b0;

  background-color: #fff;

  position: absolute;
  padding: 0 5px;

  transform: translate(0, -30px);
`;
