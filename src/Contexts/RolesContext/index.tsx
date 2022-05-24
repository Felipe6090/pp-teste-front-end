import { useState, createContext, Dispatch } from "react";

type IProviderTypes = {
  children: JSX.Element | JSX.Element[];
  state?: any;
};

type IRoles = {
  name: string;
  department: string;
  agents_quantity: number;
};

type IContextValue = {
  rolesData: IRoles[];
  setRolesData: Dispatch<any>;
};

const RolesContext = createContext({} as IContextValue);

function RolesProvider({ children, state }: IProviderTypes) {
  const [rolesData, setRolesData] = useState(state);

  return (
    <RolesContext.Provider value={{ rolesData, setRolesData }}>
      {children}
    </RolesContext.Provider>
  );
}

export { RolesContext, RolesProvider };
