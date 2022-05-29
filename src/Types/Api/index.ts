export interface IRoles {
  name: string;
  departament: string;
  agents_quantity: number;
}

interface IGroupRules {
  role: string;
  permissions: string[];
}

export interface IRoleDescription {
  name: string;
  department: string;
  grouprules: IGroupRules[];
}

export interface IRoleDescriptionRawData {
  role: IRoleDescription;
}

export interface IRolesApisRawData {
  roles: IRoles[];
}

export interface IContributors {
  agent_id: number;
  name: string;
  image: string;
  department: string;
  branch: string;
  role: string;
  status: string;
}

export interface IContributorDescriptionRawData {
  agent: IContributorData;
}

export interface IContributorData {
  id: number;
  name: string;
  email: string;
  phone: {
    ddd: string;
    ddi: string;
    number: string;
  };
  document: {
    interface: string;
    number: string;
  };
  birth_date: string;
  image: string;
  department: string;
  branch: string;
  role: string;
  status: string;
}

export interface IContributorsRawData {
  items: IContributors[];
}
