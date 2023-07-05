import React from "react";
import Button from "@mui/material/Button";

export const FormButton = ({ text, onClick, disabled, type }) => {
  const sxProps = {
    backgroundColor: "royalblue",
    color: "#EBEBEB",
    border: "1px solid royalblue",
    "&:hover": {
      backgroundColor: "white",
      color: "black",
    },
  };

  return (
    <Button onClick={onClick} sx={sxProps} type={type}>
      {text}
    </Button>
  );
};
