import styled from "@emotion/styled";

import { ModalUnstyled } from "@mui/base";

export const ModalMain = styled(ModalUnstyled)`
  position: fixed;

  left: 50%;
  top: 50%;

  transform: translate(-50%, 0);
`;

export const ModalDiv = styled.div`
  outline: none;

  box-shadow: 1px 2px 18px;

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
