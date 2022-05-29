import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import AgentDetailsScreen from "../../src/Screens/AgentDetails";

import { api } from "../../src/Services/Api";

type IType = { notFound: boolean };

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
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  if (!context.params) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const response = await api
    .get(`/agent/${context.params.id}`)
    .then((res) => {
      return {
        props: {
          data: res.data.agent,
        },
      };
    })
    .catch((err) => {
      return {
        props: {
          data: null,
        },
        notFound: true,
      };
    });

  return response;
};

export default function AgentDetails({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <AgentDetailsScreen agentData={data} />;
}
