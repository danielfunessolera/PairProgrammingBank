import { Route, Routes, Navigate } from "react-router-dom";

import SignUp from "../pages/SignUp";
import Login from "../pages/Login";

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      {/* <Route path="/*" element={<Navigate to="/signup" />} /> */}
    </Routes>
  );
};
