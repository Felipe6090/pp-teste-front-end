import { useState, createContext, Dispatch } from "react";

import { IRoles } from "../../Types/Api";

type IProviderTypes = {
  children: JSX.Element | JSX.Element[];
  state?: any;
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
