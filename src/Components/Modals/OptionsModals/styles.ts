import styled from "@emotion/styled";

import { ModalUnstyled } from "@mui/base";

import { devices } from "../../../Utils/Devices";

type IStyled = {
  image: string;
  position?: { x: number; y: number };
};

type IModal = {
  position: { x: number; y: number };
};

export const ModalMain = styled(ModalUnstyled)`
  position: fixed;

  left: ${(props: IModal) => `${props.position.x - 350}px`};
  top: ${(props: IModal) => `${props.position.y - 150}px`};

  ${devices.laptop} {
    left: 50%;
    top: 50%;

    transform: translate(-50%, -50%);
  }
`;

export const ModalDiv = styled.div`
  min-width: 340px;
  outline: none;

  box-shadow: 1px 2px 18px;

  display: flex;
  flex-direction: column;

  padding: 8px;

  background-color: #fff;

  border-radius: 20px;

  ${devices.laptop} {
    width: 80vw;
  }
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
