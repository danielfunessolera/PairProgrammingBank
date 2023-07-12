import { Route, Routes, Navigate } from "react-router-dom";

import SignUp from "../pages/SignUp";

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/signup" element={<SignUp />} />
      {/* <Route path="/*" element={<Navigate to="/signup" />} /> */}
    </Routes>
  );
};
