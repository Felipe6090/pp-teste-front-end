import styled from "@emotion/styled";

import { devices } from "../../Utils/Devices";

export const MainDiv = styled.div`
  display: flex;

  justify-content: space-between;

  align-items: center;

  padding: 0 30px;

  border-bottom: 2px solid #eaefed;

  ${devices.laptop} {
    border: none;

    flex-direction: row-reverse;

    padding-right: 50%;
  }
`;

export const HelperDiv = styled.div`
  display: flex;

  align-items: center;

  border-right: 1px solid #eaefed;
  padding-right: 32px;

  height: 60px;

  ${devices.laptop} {
    border: none;
    padding: 0;
  }
`;
