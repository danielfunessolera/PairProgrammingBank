import React from "react";
import Input from "../components/Input";
import { RegisterForm } from "../components/RegisterForm";
import { FormButton } from "../components/FormButton";
import { Container } from "@mui/material";

const SignUp = () => {
  return (
    <Container
      sx={{
        width: "100vw",
        height: "100vh",
        display: "grid",
        placeContent: "center",
      }}
    >
      <img className="logo-login" src="../../public/assets/logo_login.jpg" alt="bank app logo" />
      <h2 className="form-title">Sign Up</h2>
      <RegisterForm>
        <Input
          id="first-name"
          label="First Name"
          name="first-name"
          minLength={1}
          maxLength={10}
        />
        <Input
          id="last-name"
          label="Last Name"
          name="last-name"
          minLength={1}
          maxLength={10}
        />
        <Input
          id="username"
          label="Username"
          name="username"
          minLength={1}
          maxLength={10}
        />
        <Input
          id="password"
          label="Password"
          name="password"
          minLength={8}
          maxLength={20}
        />
        <Input
          id="password-confirm"
          label="Confirm Password"
          name="password-confirm"
          minLength={8}
          maxLength={20}
        />
        <FormButton text="Sign Up"></FormButton>
      </RegisterForm>
    </Container>
  );
};

export default SignUp;
