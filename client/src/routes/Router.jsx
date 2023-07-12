import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import User from "../pages/User";
import SignUp from "../pages/SignUp";
import BankAccount from "../pages/BankAccount";
import { AuthContext } from "../context/AuthContext";
import { AuthRoutes } from "./AuthRoutes";
import { UserRoutes } from "./UserRoutes";

const Router = () => {
  const { user } = useContext(AuthContext);

  return (
    // TODO: enhance this code

    <Routes>
      
	  {user !== null ? (
        <Route path="/*" element={<UserRoutes />} />
      ) : (
        <Route path="/*" element={<AuthRoutes />} />
      )}

      <Route path="/*" element={<Navigate to="/signup" />} />
    </Routes>
  );
};

export default Router;
