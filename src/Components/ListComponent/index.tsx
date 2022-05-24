import * as S from "./style";
import * as T from "../Foundations/Typography";

import Link from "next/link";

import SearchComponent from "../SearchComponent";

import { useRouter } from "next/router";
import ContributorsList from "./Components/ContributorsList";
import RolesList from "./Components/RolesList";

export default function ListComponent() {
  const router = useRouter();

  return (
    <S.MainDiv>
      <S.NavLinks>
        <Link href="/" passHref>
          <T.NavLink>Colaboradores</T.NavLink>
        </Link>

        <Link href="/positions" passHref>
          <T.NavLink>Cargos</T.NavLink>
        </Link>
      </S.NavLinks>

      <SearchComponent />

      {router.pathname === "/" ? (
        <ContributorsList />
      ) : (
        router.pathname === "/positions" && <RolesList />
      )}
    </S.MainDiv>
  );
}
