import styled from "@emotion/styled";

type StylesProps = {
  fontSize?: string;
};

export const SemiBoldPoppins = styled.span`
  font-family: "Poppins", sans-serif;
  font-weight: 600;

  font-size: ${(props: StylesProps) => props.fontSize || "14px"};
`;

export const RegularPoppins = styled.span`
  font-family: "Poppins", sans-serif;

  font-size: ${(props: StylesProps) => props.fontSize || "12px"};
`;
