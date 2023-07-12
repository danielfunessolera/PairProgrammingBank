import React, { useEffect, useState } from "react";
import { AppLayout } from "../layout/AppLayout";
import { Card, Grid } from "@mui/material";
import Button from "@mui/material/Button";
import fetchAccount from "../services/accountFetch";

const BankAccount = () => {
  const [account, setAccount] = useState({
    accountName: "",
    bankName: "",
  });

    useEffect(() => {
      const fetchData = async () => {
        setAccount(await fetchAccount());
      };
      fetchData();
    }, []);


  return (
    <AppLayout>
      <Card sx={{ p: 4, m: 6 }}>
        <Grid
          container
          direcion="row"
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <h2 style={{ fontSize: "20px", color: "#1976d2" }}>Bank Accounts</h2>
          <Button variant="contained">CREATE</Button>
        </Grid>

        <Grid
          container
          direcion="row"
          justifyContent={"space-between"}
          padding={1}
          alignItems={"center"}
        >
          <p style={{ fontSize: "20px", color: "#1976d2" }}>{account.bankName + "-" + account.accountName}</p>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "white",
              color: "black",
              "&:hover": {
                backgroundColor: "white",
              },
            }}
          >
            CREATE
          </Button>
        </Grid>
      </Card>
    </AppLayout>
  );
};

export default BankAccount;
