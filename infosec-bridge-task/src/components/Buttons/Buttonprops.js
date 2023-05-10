import React from 'react'

const Buttonprops = (props) => {
  return (
    <button type={props.type} className={props.className} onClick={props.onClick}>{props.name}</button>
  )
}

export default Buttonprops