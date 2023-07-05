import React, { useState } from "react";
import Input from "../components/Input";
import { RegisterForm } from "../components/RegisterForm";
import { FormButton } from "../components/FormButton";
import { Container } from "@mui/material";

const SignUp = () => {
  const [formState, setFormState] = useState({});

  const onSubmit = () => {
    console.log({ onSubmit: formState });

	// Llamar al useFetch();
  };

  const onInputChange = ({ target }) => {
    const { name, value } = target;

    setFormState({
      ...formState,
      [name]: value,
    });

    console.log(formState);
  };

  return (
    <Container
      sx={{
        width: "100vw",
        height: "100vh",
        display: "grid",
        placeContent: "center",
      }}
    >
      <img
        className="logo-login"
        src="../../public/assets/logo_login.jpg"
        alt="bank app logo"
      />
      <h2 className="form-title">Sign Up</h2>
      <RegisterForm>
        <Input
          id="first-name"
          label="First Name"
          name="first-name"
          minLength={1}
          maxLength={10}
          onChange={onInputChange}
        />
        <Input
          id="last-name"
          label="Last Name"
          name="last-name"
          minLength={1}
          maxLength={10}
          onChange={onInputChange}
        />
        <Input
          id="username"
          label="Username"
          name="username"
          minLength={1}
          maxLength={10}
          onChange={onInputChange}
        />
        <Input
          id="password"
          label="Password"
          name="password"
          minLength={8}
          maxLength={20}
          onChange={onInputChange}
        />
        <Input
          id="password-confirm"
          label="Confirm Password"
          name="password-confirm"
          minLength={8}
          maxLength={20}
          onChange={onInputChange}
        />
        <FormButton
          text="Sign Up"
          type="submit"
          onClick={onSubmit}
        ></FormButton>
      </RegisterForm>
    </Container>
  );
};

export default SignUp;
