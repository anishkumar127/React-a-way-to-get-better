import React from 'react'

const PeopleForm = () => {
  return (
    <div>
          <input type="text" placeholder='name'/>
        <select >
            <option value="default">Select</option>
            <option value="active">Active</option>
            <option value = "pending">pending</option>
        </select>
        <button>Add People</button> 
    </div>
  )
}

export default PeopleForm