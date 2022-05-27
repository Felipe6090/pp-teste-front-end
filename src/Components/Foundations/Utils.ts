import styled from "@emotion/styled";

type IStyled = {
  gap?: string;
  margin?: string;
};

export const DefaultRow = styled.div`
  display: flex;

  gap: ${(props: IStyled) => props.gap || "24px"};

  margin: ${(props: IStyled) => props.margin || "0"};
`;

export const Aside = styled.aside`
  width: 7.5%;
  border: 2px solid #eaefed;

  border-top: none;
`;
