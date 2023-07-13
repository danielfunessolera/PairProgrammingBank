import React, { useEffect, useState } from "react";
import { AppLayout } from "../layout/AppLayout";
import { Card, Grid } from "@mui/material";
import Button from "@mui/material/Button";
import fetchAccount from "../services/accountFetch";

const BankAccount = () => {
  const [account, setAccount] = useState([{
    id: 0,
    accountName: "",
    bankName: "",
    savings: 0
  }]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setAccount(await fetchAccount());
  //     console.log({"antes del fetch": account})
  //   };
  //   fetchData();
  //   console.log({"después del fetch" : account});
  // }, []);

  console.log(fetchAccount())

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       setAccount(await fetchAccount());
  //       console.log(account)
  //     } catch (error) {
  //       console.error("Error fetching account data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

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

        {account.map((acc, i) => {
          <Grid
            container
            direcion="row"
            justifyContent={"space-between"}
            padding={1}
            alignItems={"center"}
            key={i}
          >
            <p style={{ fontSize: "20px", color: "#1976d2" }}>
              {acc.bankName + "-" + acc.accountName}
            </p>
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
              DELETE
            </Button>
          </Grid>;
        })}
      </Card>
    </AppLayout>
  );
};

export default BankAccount;
