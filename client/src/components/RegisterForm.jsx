import React from "react";
import Form from "@mui/material/FormControl/";

export const RegisterForm = ({ children }) => {
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Form
      onSubmit={onSubmit}
      sx={{ margin: "0 auto" }}
      className="register-form"
    >
      {children}
    </Form>
  );
};
