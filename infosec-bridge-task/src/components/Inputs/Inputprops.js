import React from 'react'

const Inputprops = (props) => {
  return (
    <>
      <label className={props.classNamelabel}>{props.label}<span className='star-imp'>{props.star}</span> </label>
      <input className={props.className} type={props.type} placeholder={props.placeholder} defaultValue={props.value} />
    </>
  )
}

export default Inputprops