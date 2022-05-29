import dayjs from "dayjs";

export function cpfMask(value: String) {
  return value
    .replace(/\D/g, "") // substitui qualquer caracter que nao seja numero por nada
    .replace(/(\d{3})/g, "$1 "); // captura o dd
}

export function birthMask(value: string) {
  return dayjs(value);
}
