import React, { useEffect, useState } from "react";
import { AppLayout } from "../layout/AppLayout";
import { Card, Grid } from "@mui/material";
import Input from "../components/Input";
import fetchUser from "../services/userFetch";
import Form from "@mui/material/FormControl/";
import updateUser from "../services/updateUser";
import { FormButton } from "../components";

const BankAccount = () => {
  const [account, setAccount] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  //   const handleInputChange = ({ target }) => {
  //     const { name, value } = target;

  //     setUser({
  //       ...user,
  //       [name]: value,
  //     });
  //   };

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       setUser(await fetchUser());
  //     };
  //     fetchData();
  //   }, []);

  //   const handleSubmit = () => {
  //     const { firstName, lastName, email, phone } = user;
  //     updateUser(firstName, lastName, email, phone)
  //   };

  return (
    <AppLayout>
      <Card sx={{ p: 4, m: 6 }}>
        <Grid
          container
          direcion="row"
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <h2 style={{ fontSize: "20px", color: "#1976d2" }}>User Settings</h2>
          <button
            type="text"
            style={{ padding: "10px 10px", backgroundColor: "blue" }}
          >
            CREATE
          </button>
          {/* <FormButton type="text" text={"CREATE"} style={{padding: "10px 10px"}}/> */}
        </Grid>

        <Grid container direcion="row" justifyContent={"space-between"}>
          <img
            src="/user_settings.png"
            alt="user settings illustration"
            width="30%"
          />
        </Grid>
      </Card>
    </AppLayout>
  );
};

export default BankAccount;
