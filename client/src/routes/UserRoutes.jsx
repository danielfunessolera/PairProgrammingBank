import { Navigate, Route, Routes } from "react-router-dom";

import User from "../pages/User";
import BankAccount from "../pages/BankAccount";

export const UserRoutes = () => {
  return (
    <Routes>
      <Route path="/user" element={<User />} />
      <Route path="/bankaccount" element={<BankAccount />} />
    </Routes>
  );
};
