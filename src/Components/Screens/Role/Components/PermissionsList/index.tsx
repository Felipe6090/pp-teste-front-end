import * as S from "./style";

import Image from "next/image";

export default function PermissionsList() {
  return (
    <>
      <S.Table>
        <S.TableHead>
          <S.HeadColumn width="500px">Cargo</S.HeadColumn>
          <S.HeadColumn width="96px">Ler</S.HeadColumn>
          <S.HeadColumn width="96px">Editar</S.HeadColumn>
          <S.HeadColumn width="96px" lastChild>
            Excluir
          </S.HeadColumn>
        </S.TableHead>

        <S.TableBody>
          <S.BodyRow status="active">
            <S.BodyColumn width="500px">Cargo</S.BodyColumn>

            <S.BodyColumn width="96px">
              <Image
                src="/green-checkbox.png"
                alt="Read Permission Checkbox"
                layout="fixed"
                width={20}
                height={24}
              />
            </S.BodyColumn>

            <S.BodyColumn width="96px">
              <Image
                src="/green-checkbox.png"
                alt="Read Permission Checkbox"
                layout="fixed"
                width={20}
                height={24}
              />
            </S.BodyColumn>

            <S.BodyColumn width="96px" lastChild>
              <Image
                src="/green-checkbox.png"
                alt="Read Permission Checkbox"
                layout="fixed"
                width={20}
                height={24}
              />
            </S.BodyColumn>
          </S.BodyRow>
        </S.TableBody>
      </S.Table>
    </>
  );
}
