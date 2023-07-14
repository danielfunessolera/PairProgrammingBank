import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState();

  useEffect(() => {
    const storedUser = localStorage.getItem("id");

    if (storedUser) {
      setIsLogged(true);
    }

  }, []);

  const updateIsLogged = (value) => {
	  setIsLogged(value);
  }

  return (
    <AuthContext.Provider value={{ isLogged, updateIsLogged }}>
      {children}
    </AuthContext.Provider>
  );
};
