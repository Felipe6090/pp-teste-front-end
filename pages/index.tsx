import type { InferGetStaticPropsType, GetStaticProps, NextPage } from "next";

import HomeScreen from "../src/Screens/Home";

import { ContributorsProvider } from "../src/Contexts/ContributorsContext";

import { api } from "../src/Services/Api";
import { IContributors, IContributorsRawData } from "../src/Types/Api";

export const getStaticProps: GetStaticProps = async (context) => {
  const contributorsRawData: IContributorsRawData = await api
    .get("/agents")
    .then((res) => res.data);

  const contributorsData: IContributors[] = contributorsRawData.items;

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
