import type { InferGetStaticPropsType, GetStaticProps, NextPage } from "next";

import HomeScreen from "../src/Components/Screens/Home";

import { ContributorsProvider } from "../src/Contexts/ContributorsContext";

import { api } from "../src/Services/Api";

export const getStaticProps: GetStaticProps = async (context) => {
  const contributorsData = await api.get("/agents").then((res) => res.data);

  return {
    props: { contributors: contributorsData },
    revalidate: 60,
  };
};

const Home: NextPage = ({
  contributors,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <ContributorsProvider state={contributors}>
      <HomeScreen />
    </ContributorsProvider>
  );
};

export default Home;
