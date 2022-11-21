import React, { useId } from 'react'

export default function User() {
    const users = ["anish","kumar","test"];
    
    // example for forEach instead of map method
    const newArray = [];
    users.forEach((user)=>{
        newArray.push(<h1>{user}</h1>);
    })

    // so instead of creating forEach we can use map method its ultimately return the new array and which we can print
  return (
    <div>
    {/* {users.map((user,index)=> <h1 key={index}>{index+1} {user}</h1>)} */}
    
    {/* use of forEach */}
    {/* 1st way */}
    {newArray[0]}
    {newArray[1]}
    {newArray[2]}
    {/* 2nd way */}
    {newArray}
    </div>
  )
}
