import * as T from "../../Components/Foundations/Typography";
import * as U from "../../Components/Foundations/Utils";

import InputComponent from "./Components/InputComponents";
import PermissionsList from "./Components/PermissionsList";

import Link from "next/link";
import Image from "next/image";

import { IRoleDescription } from "../../Types/Api";

type IProps = {
  role: IRoleDescription;
};

export default function RoleComponent({ role }: IProps) {
  return (
    <U.DefaultBackground>
      <U.DefaultRow gap="16px">
        <Link href="/positions">
          <Image
            src="/back-icon.png"
            alt="Back to Home"
            layout="fixed"
            width={36}
            height={36}
            style={{ cursor: "pointer" }}
          />
        </Link>

        <T.SemiBoldPoppins fontSize="32px">
          Cargos e permissões
        </T.SemiBoldPoppins>
      </U.DefaultRow>

      <U.DefaultTable>
        <T.SemiBoldPoppins fontSize="16px">Dados do cargo</T.SemiBoldPoppins>

        <U.DefaultRow gap="0" justifyContent="space-between">
          <InputComponent value={role.department} label="Departamento" />

          <InputComponent value={role.name} label="Cargo" />
        </U.DefaultRow>

        <T.SemiBoldPoppins fontSize="32">
          Listagem de Permisões
        </T.SemiBoldPoppins>

        <PermissionsList role={role} />
      </U.DefaultTable>
    </U.DefaultBackground>
  );
}
