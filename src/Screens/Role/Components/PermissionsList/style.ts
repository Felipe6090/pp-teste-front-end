import styled from "@emotion/styled";

type IStyled = {
  width?: string;
  lastChild?: boolean;
  status?: string;
  avatar?: string;
};

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

  width: ${(props: IStyled) => props.width};
  margin-right: ${(props: IStyled) => (props.lastChild ? "0" : "27.33px")};
`;

export const TableBody = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BodyRow = styled.div`
  display: flex;
  padding: 20px 16px;

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

  width: ${(props: IStyled) => props.width};
  margin-right: ${(props: IStyled) => (props.lastChild ? "0" : "27.33px")};

  display: flex;
  align-items: center;
`;
