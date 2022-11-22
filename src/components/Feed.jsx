import React from 'react'

const Feed = (props) => {
  return (
    <div>
      {props.name}
      <p>{props.children}</p>
      
    </div>
  )
}

export default Feed