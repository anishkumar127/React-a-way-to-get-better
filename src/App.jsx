import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import User from "./components/User";
const userList = [
  {
    username: "anish",
    status: "Pending"
  },
  {
    username: "kumar",
    status: "Pending"
  }
];
function App() {

  const [users, setUsers] = useState(userList);

  const verifyHandler = (index) => {
    const tmpUsers = [...users]; // copied object from array users;
    const TempUser = tmpUsers[index];
    const userObj = { ...TempUser, status: "Active" } // updated object
    tmpUsers[index] = userObj;
    setUsers(tmpUsers);
  }
  return (
    <>
      <h1> hello everyone</h1>
      {users.map((user, index) => {
        return (
          <User username={user.username} status={user.status} index={index} giveMeIndex={verifyHandler} />
        )
      })}


    </>
  );
}

export default App;
