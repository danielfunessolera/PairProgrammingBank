import React from "react";
import Input from "../components/Input";
import { RegisterForm } from "../components/RegisterForm";
import { FormButton } from "../components/FormButton";

const SignUp = () => {
  return (
    <RegisterForm>
      <Input id="first-name" label="First Name" name="first-name" minLength={1} maxLength={10} />
      <Input id="last-name" label="Last Name" name="last-name" minLength={1} maxLength={10} />
      <Input id="username" label="Username" name="username" minLength={1} maxLength={10}/>
      <Input id="password" label="Password" name="password" minLength={8} maxLength={20}/>
      <Input id="password-confirm" label="Confirm Password" name="password-confirm" minLength={8} maxLength={20} />
      <FormButton text="SignUp"></FormButton>
    </RegisterForm>
  );
};

export default SignUp;
