import * as S from "./style"
import * as U from "../Foundations/Utils";
import * as T from "../Foundations/Typography";

import Link from "next/link";

import SearchComponent from "../SearchComponent";

import { useRouter } from "next/router";
import ContributorsList from "./Components/ContributorsList";
import RolesList from "./Components/RolesList";

export default function ListComponent() {
  const router = useRouter();

  return (
    <U.DefaultTable>
      <S.NavLinks>
        <Link href="/" passHref>
          <T.NavLink
            pathsHandler={{ pathName: router.pathname, correspondingPath: "/" }}
          >
            Colaboradores
          </T.NavLink>
        </Link>

        <Link href="/positions" passHref>
          <T.NavLink
            pathsHandler={{
              pathName: router.pathname,
              correspondingPath: "/positions",
            }}
          >
            Cargos
          </T.NavLink>
        </Link>
      </S.NavLinks>

      <SearchComponent />

      {router.pathname === "/" ? (
        <ContributorsList />
      ) : (
        router.pathname === "/positions" && <RolesList />
      )}
    </U.DefaultTable>
  );
}
