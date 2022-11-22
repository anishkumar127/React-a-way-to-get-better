import React from 'react'

const Feed = (props) => {
  return (
    <div>
      {props.name}
      <p>{props.content}</p>
    </div>
  )
}

export default Feed