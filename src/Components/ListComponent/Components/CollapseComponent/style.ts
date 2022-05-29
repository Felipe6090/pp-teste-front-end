import styled from "@emotion/styled";

type IProps = {
  collapsed?: boolean;
  status?: string;
  avatar?: string;
};

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;

  padding: 16px;

  transition: 0.5s;

  gap: ${(props: IProps) => (props.collapsed ? "0" : "16px")};

  border: ${(props: IProps) =>
    props.collapsed ? "1px solid #eaefed" : "1px solid #b5f1dd"};

  border-radius: 10px;
`;

export const FildInfo = styled.span`
  font-family: "Poppins", sans-serif;
  font-size: 12px;
  font-weight: 600;

  color: ${(props: IProps) =>
    props.status === "active" ? `#587169` : `#A3B8B0`};

  ${(props: IProps) =>
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

export const ActionsButton = styled.div`
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
  width: 90%;

  &::before {
    background-image: url("/file-plus.png");
    background-size: 32px 32px;
    display: inline-block;

    border-radius: 20px;
    content: "";

    width: 32px;
    height: 32px;

    margin-right: 8px;
  }

  transition: 2s;

  ${(props: IProps) => (props.collapsed ? `display: none;` : ``)}
`;
