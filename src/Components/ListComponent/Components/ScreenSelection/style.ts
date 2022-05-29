import styled from "@emotion/styled";

import { devices } from "../../../../Utils/Devices";

export const MainDiv = styled.div`
  display: none;

  cursor: pointer;

  border: 1px solid #cad6d1;
  border-radius: 5px;

  min-height: 52px;
  padding: 0 20px;

  ${devices.laptop} {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
