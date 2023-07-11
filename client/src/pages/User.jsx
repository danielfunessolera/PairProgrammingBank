import React, { useEffect, useState } from "react";
import { AppLayout } from "../layout/AppLayout";
import { Card, Grid } from "@mui/material";
import Input from "../components/Input";
import fetchUser from "../services/userFetch";
import { FormButton } from "../components";
import Form from "@mui/material/FormControl/";
import updateUser from "../services/updateUser";

const User = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const handleInputChange = ({ target }) => {
    const { name, value } = target;

    setUser({
      ...user,
      [name]: value,
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      setUser(await fetchUser());
    };
    fetchData();
  }, []);

  const handleSubmit = () => {
    const { firstName, lastName, email, phone } = user;
    updateUser(firstName, lastName, email, phone)
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
              value={user.firstName}
              onChange={handleInputChange}
            />
            <Input
              id="last-name"
              label="Last Name"
              name="lastName"
              minLength={1}
              maxLength={10}
              value={user.lastName}
              onChange={handleInputChange}
            />
            <Input
              id="email"
              label="email"
              name="email"
              minLength={1}
              maxLength={10}
              value={user.email}
              onChange={handleInputChange}
            />
            <Input
              id="phone"
              label="Phone Number"
              name="phone"
              minLength={1}
              maxLength={10}
              value={user.phone}
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
