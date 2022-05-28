import * as U from "../../Components/Foundations/Utils";
import * as T from "../../Components/Foundations/Typography";

import ListComponent from "../../Components/ListComponent";

export default function HomeScreen() {
  return (
    <U.DefaultBackground>
      <T.SemiBoldPoppins fontSize="32px">Organização</T.SemiBoldPoppins>

      <ListComponent />
    </U.DefaultBackground>
  );
}
