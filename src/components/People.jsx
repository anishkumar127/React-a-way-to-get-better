import React, { useState } from 'react'
import User from './User';
import {USER_LIST} from '../data/userData';

const People = () => {
    
  const [users, setUsers] = useState(USER_LIST);

  const verifyHandler = (index) => {
    const tmpUsers = [...users]; // copied object from array users;
    const TempUser = tmpUsers[index];
    const userObj = { ...TempUser, status: "Active" } // updated object
    tmpUsers[index] = userObj;
    setUsers(tmpUsers);
  }
  return (
    <div>
          <h1> hello everyone</h1>
      {users.map((user, index) => {
        return (
          <User username={user.username} status={user.status} index={index} giveMeIndex={verifyHandler} />
        )
      })}

    </div>
  )
}

export default People