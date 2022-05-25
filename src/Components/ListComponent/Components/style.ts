import styled from "@emotion/styled";

type IStyled = {
  width?: string;
  lastChild?: boolean;
  status?: string;
  avatar?: string;
};

export const Table = styled.div`
  display: flex;
  flex-direction: column;

  align-self: center;

  min-width: 75%;
`;

export const TableHead = styled.div`
  height: 50px;
  display: flex;

  align-items: center;

  border: 1px solid #cad6d1;

  padding-left: 16px;
`;

export const HeadColumn = styled.span`
  font-family: "Poppins", sans-serif;
  font-size: 12px;
  font-weight: 600;
  color: #587169;

  width: ${(props: IStyled) => props.width};
  margin-right: ${(props: IStyled) => (props.lastChild ? "0" : "32.5px")};
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

  width: ${(props: IStyled) => props.width};
  margin-right: 30.8px;

  display: flex;
  align-items: center;

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
  width: 182px;

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
