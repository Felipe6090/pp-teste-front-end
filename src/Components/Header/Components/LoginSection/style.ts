import styled from "@emotion/styled";
import { devices } from "../../../../Utils/Devices";

export const MainDiv = styled.div`
  display: flex;

  align-items: center;

  gap: 10px;

  border-left: 1px solid #eaefed;
  padding-left: 32px;

  height: 60px;

  ${devices.laptop} {
    border: none;
    padding: 0;
  }
`;

export const TextDiv = styled.div`
  display: flex;
  flex-direction: column;

  gap: 5px;

  align-items: flex-start;

  ${devices.laptop} {
    display: none;
  }
`;
