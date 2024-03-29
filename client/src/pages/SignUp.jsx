import React, { useContext, useEffect, useId, useState } from "react";
import Input from "../components/Input";
import { RegisterForm } from "../components/RegisterForm";
import { FormButton } from "../components/FormButton";
import { Container, Typography } from "@mui/material";
import postUser from "../services/registerUser";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [formState, setFormState] = useState({});
  const [errors, setErrors] = useState({});
  const { isLogged, updateIsLogged } = useContext(AuthContext);
  const navigate = useNavigate();
  const id = useId();

  // 1234asdF!

  const handleSubmit = () => {
    // TODO add validation
    postUser(id, formState);
    setUserLocalStorage(id);
    updateIsLogged(true);
    navigate("/user");
  };

  // useEffect(() => {
  //   isLogged && navigate("/bankaccount")
  // }, []);

  const errorsStyle = {
    color: "#EC2300",
    padding: "0 0 2rem 0",
    fontStyle: "italic",
    fontSize: ".9rem",
  };

  const setUserLocalStorage = (id) => {
    localStorage.setItem("id", id);
  };

  const validateForm = (
    firstName,
    lastName,
    userName,
    password,
    passwordConfirm
  ) => {
    const newErrors = {};

    if (!firstName || firstName.length < 2) {
      newErrors.firstName = "First name must be at least 2 characters long";
    }

    if (!lastName || lastName.length < 2) {
      newErrors.lastName = "Last name must be at least 2 characters long";
    }

    if (!userName || userName.length < 3) {
      newErrors.userName = "Username must be at least 3 characters long";
    }

    if (!password || password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long";
    } else if (!/\d/.test(password)) {
      newErrors.password = "Password must contain at least one number";
    } else if (!/[a-z]/.test(password)) {
      newErrors.password =
        "Password must contain at least one lowercase letter";
    } else if (!/[A-Z]/.test(password)) {
      newErrors.password =
        "Password must contain at least one uppercase letter";
    } else if (!/[!@#$%^&*]/.test(password)) {
      newErrors.password = "Password must contain at least one symbol";
    }

    if (password !== passwordConfirm) {
      newErrors.passwordConfirm = "Passwords do not match";
    }

    setErrors(newErrors);

    // Return true if there are no errors
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = ({ target }) => {
    const { name, value } = target;

    setFormState({
      ...formState,
      [name]: value,
    });
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
          value={formState.firstName}
          onChange={handleInputChange}
        />
        {errors.firstName ? (
          <Typography sx={errorsStyle}>{errors.firstName}</Typography>
        ) : null}
        <Input
          id="lastName"
          label="Last Name"
          name="lastName"
          value={formState.lastName}
          onChange={handleInputChange}
        />
        {errors.lastName ? (
          <Typography sx={errorsStyle}>{errors.lastName}</Typography>
        ) : null}
        <Input
          id="username"
          label="UserName"
          name="userName"
          value={formState.userName}
          onChange={handleInputChange}
        />
        {errors.userName ? (
          <Typography sx={errorsStyle}>{errors.userName}</Typography>
        ) : null}
        <Input
          id="password"
          label="Password"
          name="password"
          value={formState.password}
          onChange={handleInputChange}
          type="password"
        />
        {errors.password ? (
          <Typography sx={errorsStyle}>{errors.password}</Typography>
        ) : null}
        <Input
          id="password-confirm"
          label="Confirm Password"
          name="passwordConfirm"
          value={formState.passwordConfirm}
          onChange={handleInputChange}
          type="password"
        />
        {errors.passwordConfirm ? (
          <Typography sx={errorsStyle}>{errors.passwordConfirm}</Typography>
        ) : null}
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
