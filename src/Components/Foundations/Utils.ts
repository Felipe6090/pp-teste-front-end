import styled from "@emotion/styled";
import { devices } from "../../Utils/Devices";

type IStyled = {
  gap?: string;
  margin?: string;
  padding?: string;
  justifyContent?: string;
  alignItems?: string;
  alignSelf?: string;
  column?: boolean;
  table?: boolean;
  collapsed?: boolean;
  width?: string;
};

export const DefaultRow = styled.div`
  display: flex;

  gap: ${(props: IStyled) => props.gap || "24px"};

  ${(props: IStyled) =>
    props.justifyContent !== undefined &&
    `justify-content: ${props.justifyContent};`}

  margin: ${(props: IStyled) => props.margin || "0"};

  ${(props: IStyled) =>
    props.alignItems !== undefined && `align-items: ${props.alignItems};`}

  ${devices.laptop} {
    ${(props: IStyled) => props.column === true && `flex-direction: column;`}
  }
`;

export const DefaultColumn = styled.div`
  display: flex;
  flex-direction: column;

  width: ${(props: IStyled) => props.width || "100%"};

  align-self: ${(props: IStyled) => props.alignSelf || "auto"};

  gap: ${(props: IStyled) => props.gap || "0"};

  ${(props: IStyled) =>
    props.table ? `${devices.laptop} { display: none; }` : ""}

  ${(props: IStyled) => (props.collapsed ? `display: none;` : ``)}

  transition: 0.7s;
`;

export const Aside = styled.aside`
  width: 7.5%;
  border-right: 2px solid #eaefed;

  ${devices.laptop} {
    display: none;
  }
`;

export const DefaultTable = styled.div`
  display: flex;
  flex-direction: column;

  gap: 40px;

  background-color: #fff;
  padding: ${(props: IStyled) => props.padding || "40px 24px"};

  ${devices.laptop} {
    padding: 40px 2%;
  }
`;

export const DefaultBackground = styled.div`
  width: 100%;
  background-color: #f8faf9;

  padding: 50px 2% 80px 2%;

  display: flex;
  flex-direction: column;

  gap: 24px;
`;

export const NavLinks = styled.div`
  display: flex;
  border-bottom: 1px solid #eaefed;

  max-height: 30px;

  align-items: flex-start;

  ${devices.laptop} {
    display: none;
  }
`;
