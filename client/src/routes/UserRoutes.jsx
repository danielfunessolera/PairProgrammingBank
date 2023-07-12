import { Navigate, Route, Routes } from "react-router-dom";

import User from "../pages/User";
import BankAccount from "../pages/BankAccount";

export const UserRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<User />} />
      {/* <Route path="/*" element={<Navigate to="/" />} /> */}
      <Route path="/bankaccount" element={<BankAccount />} />
    </Routes>
  );
};
