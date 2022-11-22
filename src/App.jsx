import React from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Modal from "./components/Modal";
function App() {

  const clickHandler = (event) =>{
    console.log(event);
  }
  const changeHandler= (event)=>{
    console.log(event.target.value);
  }
  return (
    <>
    <input type="text" onChange={(event)=> {
      return (event){
        return changeHandler(event)
      }
    }}/>

    
     <button onClick={(event)=> clickHandler(event)}>Click me</button>
    </>
  );
}

export default App;
