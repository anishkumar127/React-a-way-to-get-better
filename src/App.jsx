import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
const userList =[
  {
    username:"anish",
    status:"Pending"
  },
  {
    username:"kumar",
    status:"Pending"
  }
];
function App() {

const [users,setUsers] = useState(userList);

const verifyHandler = (index) =>{
const tmpUsers = [...users]; // copied object from array users;
const TempUser = tmpUsers[index];
const userObj = {...TempUser,status:"Active"} // updated object
tmpUsers[index] = userObj;
setUsers(tmpUsers);
}
  return (
    <>
     <h1> hello everyone</h1>
     {users.map((user,index)=>{
      return(
        <div key={index}>
        <div>
        <span style={{marginRight:"20px"}}>{user.username}</span>
        <span style={{marginRight:"20px"}}>{user.status}</span>
       </div>
        <button onClick = {()=>verifyHandler(index)}>Verify</button>
        </div>
      )
     })}
   

    </>
  );
}

export default App;
