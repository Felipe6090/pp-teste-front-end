import * as U from "../Foundations/Utils";
import * as T from "../Foundations/Typography";

import Link from "next/link";

import SearchComponent from "../SearchComponent";

import { useRouter } from "next/router";
import ContributorsList from "./Components/Lists/ContributorsList";
import RolesList from "./Components/Lists/RolesList";
import ScreenSelection from "./Components/ScreenSelection";

export default function ListComponent() {
  const router = useRouter();

  return (
    <U.DefaultTable>
      <U.NavLinks>
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
      </U.NavLinks>

      <ScreenSelection />

      <SearchComponent />

      {router.pathname === "/" ? (
        <ContributorsList />
      ) : (
        router.pathname === "/positions" && <RolesList />
      )}
    </U.DefaultTable>
  );
}
