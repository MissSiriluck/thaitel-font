import axios from "../config/axios";

import { createContext, useState } from "react";

const CreateResidentContext = createContext();

function CreateResidentProvider({ children }) {
  const [values, setValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    phone: "",
    idCard: "",
    idCardImgUrl: "",
    idCardImgFile: null,
  });

  return (
    <CreateResidentContext.Provider
      value={{
        values,
        setValues,
      }}
    >
      {children}
    </CreateResidentContext.Provider>
  );
}

export { CreateResidentContext, CreateResidentProvider };
