import * as S from "./style";

import { useRouter } from "next/router";

export default function SearchComponent() {
  const router = useRouter();

  return (
    <S.MainDiv>
      <S.SearchLabel htmlFor="searchInput">Pesquisar por</S.SearchLabel>
      <S.SearchInput
        name="searchInput"
        type="text"
        placeholder={
          router.pathname === "/"
            ? "Pesquise por nome ou cpf"
            : "Pesquise por cargos"
        }
      />
    </S.MainDiv>
  );
}

/*
 
lembra de fazer algum teste em relação ao placeholder depois

como era:

router.pathname === "/"
            ? "Pesquise por nome ou cpf"
            : router.pathname === "/positions" && "Pesquise por cargos"

error:

Type 'false | "Pesquise por nome ou cpf" | "Pesquise por cargos"' is not assignable to type 'string | undefined'.
  Type 'boolean' is not assignable to type 'string'.

*/
