export type IRoles = {
  name: string;
  departament: string;
  agents_quantity: number;
};

export type IContributors = {
  agent_id: string;
  name: string;
  image: string;
  department: string;
  branch: string;
  role: string;
  status: string;
};

export type IRolesApisRawData = {
  roles: IRoles[];
};

export type IContributorsRawData = {
  items: IContributors[];
};
