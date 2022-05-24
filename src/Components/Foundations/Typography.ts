import styled from "@emotion/styled";

type StylesProps = {
  fontSize?: string;
  fontColor?: string;
};

export const SemiBoldPoppins = styled.span`
  font-family: "Poppins", sans-serif;
  font-weight: 600;

  font-size: ${(props: StylesProps) => props.fontSize || "14px"};

  color: ${(props: StylesProps) => props.fontColor || "#34423D"};
`;

export const RegularPoppins = styled.span`
  font-family: "Poppins", sans-serif;

  font-size: ${(props: StylesProps) => props.fontSize || "12px"};
`;

export const NavLink = styled.a`
  text-decoration: none;
  font-family: "Poppins", sans-serif;

  font-size: 14px;
  color: #34423d;

  margin-bottom: 5px;
  min-width: 196px;
  text-align: center;
`;
