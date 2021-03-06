import styled from "@emotion/styled";

import { devices } from "../../Utils/Devices";

interface IStyled {
  width?: string;
  lastChild?: boolean;
  status?: string;
  avatar?: string;
  justifyContent?: string;
  toLeft?: boolean;
}

interface ITableColumn extends IStyled {
  width: string;
}

export const TableHead = styled.div`
  height: 50px;
  display: flex;

  align-items: center;

  border: 1px solid #cad6d1;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  padding: 0 16px;
`;

export const HeadColumn = styled.span`
  font-family: "Poppins", sans-serif;
  font-size: 12px;
  font-weight: 600;
  color: #587169;

  width: ${(props: ITableColumn) => props.width};
`;

export const TableBody = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BodyRow = styled.div`
  display: flex;
  padding: 18px 16px;

  border-bottom: 1px solid #eaefed;

  span {
    ${(props: IStyled) =>
      props.status === "active" ? `color: #587169;` : `color: #A3B8B0;`}
  }
`;

export const BodyColumn = styled.span`
  font-family: "Poppins", sans-serif;
  font-size: 12px;
  font-weight: 600;

  width: ${(props: ITableColumn) => props.width};

  display: flex;
  align-items: center;

  ${(props: IStyled) =>
    props.justifyContent !== undefined &&
    `justify-content: ${props.justifyContent};`}

  ${(props: IStyled) =>
    props.avatar &&
    `
      &::before {
        background-image: url(${props.avatar});
        background-size: 32px 32px;
        display: inline-block;
        
        border-radius: 20px;
        content: "";

        width: 32px;
        height: 32px;

        margin-right: 8px;
      }
  `}
`;

export const StatusDiv = styled.div`
  width: 25%;

  display: flex;
  align-items: center;

  justify-content: space-between;
`;

export const ActivedLabel = styled.div`
  width: 72px;
  height: 24px;

  border-radius: 20px;
  background-color: #b5f1dd;

  font-family: "Poppins", sans-serif;
  font-size: 14px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #34423d;
`;

export const InactiveLabel = styled(ActivedLabel)`
  background-color: #eaefed;
`;

export const ResponsiveTable = styled.div`
  display: none;

  ${devices.laptop} {
    display: flex;
    flex-direction: column;

    gap: 10px;
  }
`;

export const LoadMore = styled.div`
  display: flex;
  align-items: center;

  align-self: center;
  justify-content: center;

  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: #34423d;

  border: 1px solid #b5f1dd;
  border-radius: 10px;

  height: 52px;
  width: 99%;

  margin-top: 14px;

  &::before {
    background-image: url("/refresh-icon.png");
    background-size: 32px 32px;
    display: inline-block;

    border-radius: 20px;
    content: "";

    width: 32px;
    height: 32px;

    margin-right: 8px;
  }
`;

export const NumbersSelect = styled.select`
  border: solid 1px #587169;
  border-radius: 5px;

  color: #587169;

  background-color: #f5faf8;

  outline: 0;

  padding: 0 10px;

  font-family: "Poppins", sans-serif;
  font-size: 16px;

  min-height: 30px;

  cursor: pointer;
`;

export const PassArrows = styled.div`
  padding: 6 12px;

  border: solid 1px #709085;

  ${(props: IStyled) =>
    props.toLeft
      ? `
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  `
      : `
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  `}

  content: url(${(props: IStyled) => props.toLeft ? "/arrow-left.png" : "/arrow-right.png"}) ;
`;
