import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import AgentDetailsScreen from "../../src/Screens/AgentDetails";

import { api } from "../../src/Services/Api";

import {
  IContributorData,
  IContributorDescriptionRawData,
  IContributors,
  IContributorsRawData,
} from "../../src/Types/Api";

export const getStaticPaths: GetStaticPaths = async () => {
  const agentsRawData: IContributorsRawData = await api
    .get("/agents")
    .then((res) => res.data);

  const agentsData: IContributors[] = agentsRawData.items;

  const paths = agentsData.map((agent) => {
    const param = String(agent.agent_id);

    return {
      params: {
        id: param,
      },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const rolesRawData: IContributorDescriptionRawData = await api
    .get(`/agent/1`)
    .then((res) => res.data);

  const agentData: IContributorData = rolesRawData.agent;

  return {
    props: {
      data: agentData,
    },
  };
};

export default function AgentDetails({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <AgentDetailsScreen />;
}
