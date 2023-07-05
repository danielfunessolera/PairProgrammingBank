import React from 'react'
import TextField from '@mui/material/TextField';

const Input = ({id, label, name, minLength, maxLength, onChange, type}) => {
  return (
    <TextField id={id} label={label} type={type} variant="outlined" name={name} required sx={{marginBottom: "1rem", width: "100%"}} onChange={onChange} minLength={minLength} maxLength={maxLength}/>
  )
}

export default Input
