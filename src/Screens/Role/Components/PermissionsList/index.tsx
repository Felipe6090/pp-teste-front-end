import * as U from "../../../../Components/Foundations/Utils";
import * as TE from "../../../../Components/Foundations/TablesElements";

import Checkbox from "@mui/material/Checkbox";

import { IRoleDescription } from "../../../../Types/Api";

type IProps = {
  role: IRoleDescription;
};

export default function PermissionsList({ role }: IProps) {
  return (
    <>
      <U.DefaultColumn alignSelf="center">
        <TE.TableHead>
          <TE.HeadColumn width="55%">Cargo</TE.HeadColumn>
          <TE.HeadColumn width="15%">Ler</TE.HeadColumn>
          <TE.HeadColumn width="15%">Editar</TE.HeadColumn>
          <TE.HeadColumn width="15%">Excluir</TE.HeadColumn>
        </TE.TableHead>

        <TE.TableBody>
          {role.grouprules.map((permission) => {
            return (
              <TE.BodyRow status="active" key={Math.random()}>
                <TE.BodyColumn width="55%">{permission.role}</TE.BodyColumn>

                <TE.BodyColumn width="15%">
                  <Checkbox
                    defaultChecked={
                      permission.permissions.find(
                        (element) => element === "read"
                      )
                        ? true
                        : false
                    }
                    sx={{
                      color: "#1dd195",
                      "&.Mui-checked": {
                        color: "#1dd195",
                      },
                    }}
                  />
                </TE.BodyColumn>

                <TE.BodyColumn width="15%">
                  <Checkbox
                    defaultChecked={
                      permission.permissions.find(
                        (element) => element === "write"
                      )
                        ? true
                        : false
                    }
                    sx={{
                      color: "#1dd195",
                      "&.Mui-checked": {
                        color: "#1dd195",
                      },
                    }}
                  />
                </TE.BodyColumn>

                <TE.BodyColumn width="15%">
                  <Checkbox
                    defaultChecked={
                      permission.permissions.find(
                        (element) => element === "delete"
                      )
                        ? true
                        : false
                    }
                    sx={{
                      color: "#1dd195",
                      "&.Mui-checked": {
                        color: "#1dd195",
                      },
                    }}
                  />
                </TE.BodyColumn>
              </TE.BodyRow>
            );
          })}
        </TE.TableBody>
      </U.DefaultColumn>
    </>
  );
}
