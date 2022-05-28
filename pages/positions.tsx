import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";

import { api } from "../src/Services/Api";

import HomeScreen from "../src/Screens/Home";

import { RolesProvider } from "../src/Contexts/RolesContext";
import { IRoles, IRolesApisRawData } from "../src/Types/Api";

export const getStaticProps: GetStaticProps = async (context) => {
  const rolesRawData: IRolesApisRawData = await api
    .get("/roles")
    .then((res) => res.data);

  const rolesData: IRoles[] = rolesRawData.roles;

  return {
    props: { roles: rolesData },
    revalidate: 60,
  };
};

const Positions: NextPage = ({
  roles,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <RolesProvider state={roles}>
      <HomeScreen />
    </RolesProvider>
  );
};

export default Positions;
