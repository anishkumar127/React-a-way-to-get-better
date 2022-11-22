import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Feed from "./components/Feed";
import Modal from "./components/Modal";
function App() {
  const tweets = [
    {
      name: "anish",
      content: "this is my 1 content",
    },
    {
      name: "kumar",
      content: "this is my 2 content",

    },
    {
      name: "bishnoi",
      content: "this is my 3 content",

    },
  ];
  return (
    <>
   


    <Modal>
    <p> Do you want to save changes?</p>
    <button>Yes</button>
    <button>No</button>
    </Modal>
    <Modal>

    <p>your changes have been saved!</p>
    <button>Yes</button>
    </Modal>
    </>
  );
}

export default App;
