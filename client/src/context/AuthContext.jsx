import React, { createContext, useEffect, useState } from "react";

// Create the context
export const AuthContext = createContext();

// Create the provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Check localStorage for user on component mount
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(storedUser);
    }
    console.log(user);
  }, [user]);

  // Function to update the user and store it in localStorage
  const updateUser = (newUser) => {
    setUser(newUser);
    if (newUser !== null && newUser !== undefined) {
      localStorage.setItem("user", newUser);
    }
  };

  return (
    <AuthContext.Provider value={{ user, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};
