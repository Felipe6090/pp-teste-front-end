import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";

import { api } from "../../src/Services/Api";

import {
  IRoleDescription,
  IRoleDescriptionRawData,
  IRoles,
  IRolesApisRawData,
} from "../../src/Types/Api";

import RoleComponent from "../../src/Screens/Role";

export const getStaticPaths: GetStaticPaths = async () => {
  const rolesRawData: IRolesApisRawData = await api
    .get("/roles")
    .then((res) => res.data);

  const rolesData: IRoles[] = rolesRawData.roles;

  const paths = rolesData.map((role) => {
    const param = role.name;

    return {
      params: {
        name: param,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const response = await api.get(`/role/1`).then((res) => {
    return res.data;
  });

  if (response === undefined) {
    return {
      props: {},
      notFound: true,
    };
  }

  const roleData = response.role;

  return {
    props: { data: roleData },
  };
};

export default function Role({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <RoleComponent role={data} />;
}
