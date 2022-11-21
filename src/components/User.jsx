import React, { useState } from 'react'

export default function User() {
    const [users,setUsers] = useState([]);
    const addMe = () =>{
        console.log("adding more students..");
        setUsers(users=>[...users,"anish"]);
    }
  
  return (
    <div>
    <button onClick={addMe}>Click me to add</button>
    {users.map((user,index)=> <h1 key={index}>{index+1} {user}</h1>)}
    </div>
  )
}
