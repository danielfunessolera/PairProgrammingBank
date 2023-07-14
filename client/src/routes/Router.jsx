import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { AuthRoutes } from "./AuthRoutes";
import { UserRoutes } from "./UserRoutes";

const Router = () => {
  const { isLogged } = useContext(AuthContext);

  return (
    <Routes>
      {isLogged ? (
        <Route path="/*" element={<UserRoutes />} />
      ) : (
        <Route path="auth/*" element={<AuthRoutes />} />
      )}

      {/* <Route path="/*" element={<Navigate to="/auth/signup" />} /> */}
    </Routes>
  );
};

export default Router;
