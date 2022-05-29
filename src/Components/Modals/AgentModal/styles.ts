import styled from "@emotion/styled";

import { ModalUnstyled } from "@mui/base";

type IStyled = {
  image: string;
};

type IModalBody = {
  position: { x: number; y: number };
};

export const ModalMain = styled(ModalUnstyled)`
  position: fixed;
  z-index: 2;

  left: ${(props: IModalBody) => `${props.position.x - 350}px`};
  top: ${(props: IModalBody) => `${props.position.y - 150}px`};
`;

export const ModalDiv = styled.div`
  outline: none;
  min-width: 340px;

  display: flex;
  flex-direction: column;

  padding: 8px;

  background-color: #fff;

  border-radius: 20px;
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

  &::before {
    content: url(${(props: IStyled) => props.image});
    margin-right: 16px;
  }
`;
