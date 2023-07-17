import React, { useContext, useEffect, useState } from "react";
import { AppLayout } from "../layout/AppLayout";
import { Card, Grid } from "@mui/material";
import Input from "../components/Input";
import { FormButton } from "../components";
import Form from "@mui/material/FormControl/";
import updateUser from "../services/updateUser";
import { UserContext } from "../context/userContext";

const User = () => {
  const { userContext, updateUserContext } = useContext(UserContext);

  const [userUpdateForm, setUserUpdateForm] = useState({
    firstName: userContext.firstName,
    lastName: userContext.lastName,
    email: userContext.email,
    phone: userContext.phone,
  });

  const handleInputChange = ({ target }) => {
    const { name, value } = target;

    setUserUpdateForm({
      ...userUpdateForm,
      [name]: value,
    });
  };

  useEffect(() => {
    setUserUpdateForm(userContext);
  }, [userContext]);

  const handleSubmit = () => {
    const { firstName, lastName, email, phone } = userUpdateForm;
    const id = localStorage.getItem("id");

    updateUser(id, firstName, lastName, email, phone);
    updateUserContext(userUpdateForm);
  };

  return (
    <AppLayout>
      <Card sx={{ p: 2 }}>
        <h2>User Settings</h2>
        <Grid container direcion="row">
          <img
            src="/user_settings.png"
            alt="user settings illustration"
            width="30%"
          />
          <Form sx={{ width: "60%" }} onSubmit={handleSubmit}>
            <Input
              id="first-name"
              label="First Name"
              name="firstName"
              minLength={1}
              maxLength={10}
              value={userUpdateForm.firstName}
              onChange={handleInputChange}
            />
            <Input
              id="last-name"
              label="Last Name"
              name="lastName"
              minLength={1}
              maxLength={10}
              value={userUpdateForm.lastName}
              onChange={handleInputChange}
            />
            <Input
              id="email"
              label="email"
              name="email"
              minLength={1}
              maxLength={10}
              value={userUpdateForm.email}
              onChange={handleInputChange}
            />
            <Input
              id="phone"
              label="Phone Number"
              name="phone"
              minLength={1}
              maxLength={10}
              value={userUpdateForm.phone}
              onChange={handleInputChange}
            />
            <FormButton type="submit" text={"Save"} onClick={handleSubmit} />
          </Form>
        </Grid>
      </Card>
    </AppLayout>
  );
};

export default User;
