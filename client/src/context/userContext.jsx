import React, { createContext, useContext, useEffect, useState } from "react";
import fetchUser from "../services/userFetch";
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userContext, setUserContext] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      setUserContext(await fetchUser(localStorage.getItem("id")));
    };
    fetchData();
  }, []);

  const updateUserContext = (value) => {
    setUserContext((prevUserContext) => {
      return { ...prevUserContext, ...value };
    });
  };

  return (
    <UserContext.Provider value={{ userContext, updateUserContext }}>
      {children}
    </UserContext.Provider>
  );
};
