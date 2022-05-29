import styled from "@emotion/styled";
import { devices } from "../../../../Utils/Devices";

export const MainDiv = styled.div`
  display: flex;
  gap: 8px;

  width: 100%;
  height: 70px;

  border: 2px solid #cad6d1;
  background-color: #f5faf8;

  align-items: center;
  padding-left: 16px;

  border-radius: 8px;

  ${devices.laptop} {
    width: auto;
  }
`;

export const InfosColumn = styled.div`
  display: flex;
  flex-direction: column;
`;
