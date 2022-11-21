import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Button from './components/Button';
import {Dashboard} from './components/Dashboard';
import User from './components/User';

function App() {
  const style = {
    color:"red",
    fontSize :"20px",
    backgroundColor:"white"
  }
  const loginButtonHandler = () =>{
    console.log("Login");
  }
  const logoutButtonHandler = () =>{
    console.log("Logout");
  }
  return (
    <>
    <Button handler={logoutButtonHandler}  style={style}> <p> click here  </p> </Button>
    <Button handler={loginButtonHandler} style={style}>Login </Button>
    <Dashboard/>
    <User/>
  </>
  );
}

export default App;