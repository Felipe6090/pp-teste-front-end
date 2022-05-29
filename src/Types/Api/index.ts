export type IRoles = {
  name: string;
  departament: string;
  agents_quantity: number;
};

type IGroupRules = {
  role: string;
  permissions: string[];
};

export type IRoleDescription = {
  name: string;
  department: string;
  grouprules: IGroupRules[];
};

export type IRoleDescriptionRawData = {
  role: IRoleDescription;
};

export type IRolesApisRawData = {
  roles: IRoles[];
};

export type IContributors = {
  agent_id: number;
  name: string;
  image: string;
  department: string;
  branch: string;
  role: string;
  status: string;
};

export type IContributorDescriptionRawData = {
  agent: IContributorData;
};

export type IContributorData = {
  id: number;
  name: string;
  email: string;
  phone: {
    ddd: string;
    ddi: string;
    number: string;
  };
  document: {
    type: string;
    number: string;
  };
  birth_date: string;
  image: string;
  department: string;
  branch: string;
  role: string;
  status: string;
};

export type IContributorsRawData = {
  items: IContributors[];
};
