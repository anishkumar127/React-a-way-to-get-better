import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
function Button(props) {
  const { color, label } = props;
  const styleObject ={
    color:color,
  }
  return <button style={styleObject}> {label}</button>;
}

function App() {
  return (
    <>
    <Button label="Click here" color="red" />
    <Button label="Login" color="blue" />
  </>
  );
}

export default App;