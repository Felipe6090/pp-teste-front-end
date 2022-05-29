import styled from "@emotion/styled";

type IStyled = {
  gap?: string;
  margin?: string;
  padding?: string;
  justifyContent?: string;
  alignSelf?: string;
};

export const DefaultRow = styled.div`
  display: flex;

  gap: ${(props: IStyled) => props.gap || "24px"};

  ${(props: IStyled) =>
    props.justifyContent !== undefined &&
    `justify-content: ${props.justifyContent};`}

  margin: ${(props: IStyled) => props.margin || "0"};
`;

export const DefaultColumn = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  align-self: ${(props: IStyled) => props.alignSelf || "auto"};
`;

export const Aside = styled.aside`
  width: 7.5%;
  border-right: 2px solid #eaefed;
`;

export const DefaultTable = styled.div`
  display: flex;
  flex-direction: column;

  gap: 40px;

  background-color: #fff;
  padding: ${(props: IStyled) => props.padding || "40px 24px"};
`;

export const DefaultBackground = styled.div`
  width: 100%;
  background-color: #f8faf9;

  padding: 50px 2% 80px 2%;

  display: flex;
  flex-direction: column;

  gap: 24px;
`;
