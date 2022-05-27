import styled from "@emotion/styled";

type StylesProps = {
  fontSize?: string;
  fontColor?: string;

  pathsHandler?: {
    pathName: string;
    correspondingPath: string;
  };
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
  font-weight: 600;

  font-size: 14px;

  ${(props: StylesProps) =>
    props.pathsHandler?.correspondingPath === props.pathsHandler?.pathName
      ? `
      color: #34423D;
      border-bottom: 1px solid #22E0A1;
      `
      : `color: #A3B8B0;`};

  min-width: 196px;
  height: 30px;

  text-align: center;
`;
