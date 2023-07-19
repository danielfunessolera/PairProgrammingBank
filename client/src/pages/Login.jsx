import React, { useContext, useEffect, useId, useState } from "react";
import Input from "../components/Input";
import { RegisterForm } from "../components/RegisterForm";
import { FormButton } from "../components/FormButton";
import { Container, Typography } from "@mui/material";
import { AuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import loginUser from "../services/loginUser";
import { UserContext } from "../context/userContext";

const Login = () => {
  const [formState, setFormState] = useState({});
  const { userContext, updateUserContext } = useContext(UserContext);
  const [errors, setErrors] = useState({});
  const { updateIsLogged } = useContext(AuthContext);
  const navigate = useNavigate();

  // 1234asdF!

  const handleSubmit = async () => {
    const loggedUser = await loginUser(formState);
    await updateUserContext(loggedUser);
    setUserLocalStorage(userContext.id);
    updateIsLogged(true);
    navigate("/user");
  };

  const errorsStyle = {
    color: "#EC2300",
    padding: "0 0 2rem 0",
    fontStyle: "italic",
    fontSize: ".9rem",
  };

  const setUserLocalStorage = (id) => {
    localStorage.setItem("id", id);
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
      <h2 className="form-title">Login</h2>
      <RegisterForm>
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
        <FormButton
          text="Login"
          type="submit"
          onClick={handleSubmit}
        ></FormButton>
      </RegisterForm>
      <Typography sx={{ pt: "1rem" }}>Need an account? <Link to="/auth/signup">Sign Up</Link>
      </Typography>
    </Container>
  );
};

export default Login;
