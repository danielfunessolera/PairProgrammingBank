import React from 'react'
import {Routes, Route} from "react-router-dom";
import User from '../pages/User';
import SignUp from '../pages/SignUp';

const Router = () => {
  return (
    <Routes>
      <Route index path="/" element ={<User/>}/> 
      {/* <Route path="/transactions" element ={<Transactions/>}/>  */}
      <Route path="/signup" element ={<SignUp/>}/> 
      {/* <Route path="/bankaccount" element ={<BankAccount/>}/>  */}
    </Routes>
  )
}

export default Router