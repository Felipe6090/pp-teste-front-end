import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import HomeScreen from "../src/Components/Screens/Home";
import { RolesProvider } from "../src/Contexts/RolesContext";
import { api } from "../src/Services/Api";

export const getStaticProps: GetStaticProps = async (context) => {
  const rolesData = await api.get("/roles").then((res) => res.data);

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
