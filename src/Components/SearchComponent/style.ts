import styled from "@emotion/styled";

export const MainDiv = styled.div`
  border: solid 1px #cad6d1;
  border-radius: 5px;

  min-height: 52px;

  padding: 0 20px;

  display: flex;
  align-items: center;

  &::before {
    content: url("/search.png");
    margin-right: 10px;
  }
`;

export const SearchInput = styled.input`
  border: none;
  outline: 0;

  font-family: "Poppins", sans-serif;
  font-size: 16px;

  width: 100%;

  color: #587169;
`;

export const SearchLabel = styled.label`
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  color: #a3b8b0;

  background-color: #fff;

  position: absolute;
  padding: 0 5px;

  transform: translate(0, -27px);
`;
