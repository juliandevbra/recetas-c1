import { createContext, useContext, useState } from "react";

const GlobalStates = createContext();

const Context = ({ children }) => {
  const [salario, setSalario] = useState(1500000);
  const [total, setTotal] = useState(salario * 12);

  return (
    <GlobalStates.Provider value={{ salario, setSalario }}>
      {children}
    </GlobalStates.Provider>
  );
};

export default Context;

export const useGlobalStates = () => useContext(GlobalStates);
