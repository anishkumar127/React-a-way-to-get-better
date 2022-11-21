import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
function Button(props) {
  const { color ,children, style,handler} = props;
  
  return <button  style={style} onClick={handler}> {children}</button>;
}

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
  </>
  );
}

export default App;