import { useState, createContext, Dispatch } from "react";

import { IContributors } from "../../Types/Api";

type IProviderTypes = {
  children: JSX.Element | JSX.Element[];
  state?: any;
};

type IContextValue = {
  contributorsData: IContributors[];
  setContributorsData: Dispatch<any>;
};

const ContributorsContext = createContext({} as IContextValue);

function ContributorsProvider({ children, state }: IProviderTypes) {
  const [contributorsData, setContributorsData] = useState(state);

  return (
    <ContributorsContext.Provider
      value={{ contributorsData, setContributorsData }}
    >
      {children}
    </ContributorsContext.Provider>
  );
}

export { ContributorsContext, ContributorsProvider };
