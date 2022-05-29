import * as U from "../../../../Components/Foundations/Utils";
import * as TE from "../../../../Components/Foundations/TablesElements";

import Image from "next/image";

import Checkbox from "@mui/material/Checkbox";

export default function PermissionsList() {
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
          <TE.BodyRow status="active">
            <TE.BodyColumn width="55%">Cargo</TE.BodyColumn>

            <TE.BodyColumn width="15%">
              <Checkbox
                defaultChecked
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
                defaultChecked
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
                defaultChecked
                sx={{
                  color: "#1dd195",
                  "&.Mui-checked": {
                    color: "#1dd195",
                  },
                }}
              />
            </TE.BodyColumn>
          </TE.BodyRow>
        </TE.TableBody>
      </U.DefaultColumn>
    </>
  );
}
