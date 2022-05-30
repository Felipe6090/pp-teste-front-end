import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import AgentDetailsScreen from "../../src/Screens/AgentDetails";

import { api } from "../../src/Services/Api";

import { IContributors, IContributorsRawData } from "../../src/Types/Api";

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
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const response = await api.get(`/agent/1`).then((res) => {
    return res.data;
  });

  if (response === undefined) {
    return {
      props: {},
      notFound: true,
    };
  }

  const agentData = response.agent;

  return {
    props: { data: agentData },
  };
};

export default function AgentDetails({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <AgentDetailsScreen agentData={data} />;
}
