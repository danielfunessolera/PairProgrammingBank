import React, { useState } from "react";
import Input from "../components/Input";
import { RegisterForm } from "../components/RegisterForm";
import { FormButton } from "../components/FormButton";
import { Container } from "@mui/material";
import postUser from "../services/registerUser";

const SignUp = () => {
  const [formState, setFormState] = useState({});

  const handleSubmit = () => {
    const { 
      firstName, 
      lastName, 
      userName, 
      password 
    } = formState;

    if (formState.passwordConfirm === formState.password) {
      postUser(firstName, lastName, userName, password);
    } else {
      console.log("Las contraseñas no coinciden");
    }
    console.log(formState);
  };

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    console.log({ name, value });

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
      <img className="logo-login" src="/logo_login.jpg" alt="bank app logo" />
      <h2 className="form-title">Sign Up</h2>
      <RegisterForm>
        <Input
          id="firstName"
          label="First Name"
          name="firstName"
          minLength={1}
          maxLength={10}
          value={formState.firstName}
          onChange={handleInputChange}
        />
        <Input
          id="lastName"
          label="Last Name"
          name="lastName"
          minLength={1}
          maxLength={10}
          value={formState.lastName}
          onChange={handleInputChange}
        />
        <Input
          id="username"
          label="UserName"
          name="userName"
          minLength={1}
          maxLength={10}
          value={formState.userName}
          onChange={handleInputChange}
        />
        <Input
          id="password"
          label="Password"
          name="password"
          minLength={8}
          maxLength={20}
          value={formState.password}
          onChange={handleInputChange}
          type="password"
        />
        <Input
          id="password-confirm"
          label="Confirm Password"
          name="passwordConfirm"
          minLength={8}
          maxLength={20}
          value={formState.passwordConfirm}
          onChange={handleInputChange}
          type="password"
        />
        <FormButton
          text="Sign Up"
          type="submit"
          onClick={handleSubmit}
        ></FormButton>
      </RegisterForm>
    </Container>
  );
};

export default SignUp;
