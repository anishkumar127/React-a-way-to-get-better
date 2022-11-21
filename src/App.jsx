import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
function Button(props) {
  const { color ,children, style} = props;
  return <button  style={style}> {children}</button>;
}

function App() {
  const style = {
    color:"red",
    fontSize :"20px",
    backgroundColor:"white"
  }
  return (
    <>
    <Button  style={style}> <p> click here  </p> </Button>
    <Button style={style}>Login </Button>
  </>
  );
}

export default App;