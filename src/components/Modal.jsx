import React from 'react'

const Modal = ({children,type, style}) => {
  return (
    <div>
        <h2 style={style}>{type}</h2> 
        {children}
    </div>
  )
}

export default Modal