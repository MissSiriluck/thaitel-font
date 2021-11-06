import { createContext, useState } from "react";

const OwnerDetailContext = createContext();

const OwnerDetailProvider = ({ children }) => {
  const [ownerDetailErrors, setOwnerDetailErrors] = useState({
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    idCard: "",
    idCardImgUrl: "",
    idCardImgFile: null,
  });

  return (
    <OwnerDetailContext.Provider
      value={{
        ownerDetailErrors,
        setOwnerDetailErrors,
      }}
    >
      {children}
    </OwnerDetailContext.Provider>
  );
};

export { OwnerDetailProvider, OwnerDetailContext };
