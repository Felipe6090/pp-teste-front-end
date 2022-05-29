import styled from "@emotion/styled";

import { ModalUnstyled } from "@mui/base";

type IStyled = {
  image: string;
  position?: { x: number; y: number };
};

type IModal = {
  position: { x: number; y: number };
};

export const ModalMain = styled(ModalUnstyled)`
  position: fixed;

  left: 10%;
  bottom: 10%;
`;

export const ModalDiv = styled.div`
  outline: none;

  min-width: 70vw;

  display: flex;
  flex-direction: column;

  padding: 16px 32px;

  background-color: #fff;

  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
`;

export const Options = styled.span`
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: #587169;

  cursor: pointer;

  display: flex;
  align-items: center;

  height: 58px;
`;
