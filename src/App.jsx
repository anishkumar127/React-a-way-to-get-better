import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Feed from "./components/Feed";
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
      <Feed name={tweets[0].name}>
        {tweets[0].content}
      </Feed>

      <Feed name={tweets[1].name}> this is children </Feed>
    </>
  );
}

export default App;
