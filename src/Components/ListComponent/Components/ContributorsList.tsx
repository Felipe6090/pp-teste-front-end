import { useContext } from "react";

import { ContributorsContext } from "../../../Contexts/ContributorsContext";

import * as S from "./style";
import * as T from "../../Foundations/Typography";

export default function ContributorsList() {
  const { contributorsData } = useContext(ContributorsContext);

  return (
    <>
      <T.SemiBoldPoppins fontSize="16px">
        Listagem de colaboradores
      </T.SemiBoldPoppins>

      <S.Table>
        <S.TableHead>
          <S.TableRow>
            <S.TH>Nome Completo</S.TH>
            <S.TH>Departamento</S.TH>
            <S.TH>Cargo</S.TH>
            <S.TH>Unidade</S.TH>
            <S.TH>Status</S.TH>
          </S.TableRow>
        </S.TableHead>

        <S.TableBody>{contributorsData.items.map((item) => {})}</S.TableBody>
      </S.Table>
    </>
  );
}
