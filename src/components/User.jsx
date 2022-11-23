import React from 'react'

const User = ({username,status,index,giveMeIndex}) => {
 
  return (
    <div key={index}>
        <div >
        <span style={{marginRight:"20px"}}>{username}</span>
        <span style={{marginRight:"20px"}}>{status}</span>
       </div>
        <button onClick = {()=>giveMeIndex(index)}>Verify</button>
    </div>
  )
}

export default User