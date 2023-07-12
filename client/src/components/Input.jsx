import React from "react";
import TextField from "@mui/material/TextField";

const Input = ({ id, label, name, required, onChange, type, value}) => {
  return (
    <TextField
      id={id}
      label={label}
      type={type}
      variant="outlined"
      name={name}
      sx={{ marginBottom: "1rem", width: "100%" }}
      onChange={onChange}
      value={value ? value : ""}
    />
  );
};

export default Input;
