import React from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Modal from "./components/Modal";
function App() {

  return (
    <>
      <Modal type="Confirmation">
        <p> Do you want to save changes?</p>
        <button>Yes</button>
        <button>No</button>
      </Modal>
      <Modal type="Information" style={{backgroundColor:"gray"}}>

        <p>your changes have been saved!</p>
        <button>Yes</button>
      </Modal>
    </>
  );
}

export default App;
