import React, { useEffect, useState } from "react";
import { AppLayout } from "../layout/AppLayout";
import { Card, Grid } from "@mui/material";
import Button from "@mui/material/Button";
import fetchAccount from "../services/accountFetch";
import deleteAccount from "../services/deleteAccount";

const BankAccount = () => {
  const [account, setAccount] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setAccount(await fetchAccount());
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchData();
  }, []);

  const handleDelete = (id) => {
    const deleteFn = async () => {
      try {
        deleteAccount(id);
      } catch (error) {
        console.error(error.message);
      }
    };
    setAccount(account.filter((acc) => acc.id !== id));
    deleteFn(id);
  };

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
        {account <= 0
          ? "No Bank Accounts yet"
          : account.map((acc, i) => {
              return (
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
                    onClick={() => handleDelete(acc.id)}
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
                </Grid>
              );
            })}
        {}
      </Card>
    </AppLayout>
  );
};

export default BankAccount;