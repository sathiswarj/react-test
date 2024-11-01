import React from 'react'

const CommonInput = ({label, name, id,type, onChange,value, placeholder}) => {
  return (
    <>
    <label htmlFor={name}>{label}</label>
    <input 
    name={name} 
    id={id} 
    type={type || 'text'}
    value={value} 
    onChange={onChange} 
    placeholder={placeholder || "Ener the value here"} 
    />
    </>
  )
}

export default CommonInput