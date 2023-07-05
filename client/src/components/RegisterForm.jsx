import React, { useState } from "react";
import Form from "@mui/material/FormControl/";

export const RegisterForm = ({ children }) => {
  return (
    <Form sx={{ margin: "0 auto", width: "100%" }} className="register-form">
      {children}
    </Form>
  );
};
