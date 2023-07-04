import React from 'react'
import TextField from '@mui/material/TextField';

const Input = ({id, label, name, minLength, maxLength}) => {
  return (
    <TextField id={id} label={label} variant="outlined" name={name} required ={true} sx={{backgroundColor: 'white'}}/>
  )
}

export default Input