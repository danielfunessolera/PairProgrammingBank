import React from 'react'
import Button from '@mui/material/Button';

export const FormButton = ({text, onClick, disabled}) => {
  return (
    <Button onClick={onClick} sx={{backgroundColor: 'white'}}>{text}</Button>
  )
}
