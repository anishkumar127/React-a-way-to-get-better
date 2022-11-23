import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import People from "./components/People";
import AddPeople from "./components/AddPeople";
function App() {

  return (
    <>
   <AddPeople/>
    <People/>

    </>
  );
}

export default App;
