import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const ResidentContext = createContext();

function ResidentContextProvider({ children }) {
  const [residents, setResidents] = useState([]);
  // console.log(residents);

  return (
    <>
      <ResidentContext.Provider value={{ residents, setResidents }}>
        {children}
      </ResidentContext.Provider>
    </>
  );
}
export { ResidentContextProvider, ResidentContext };
