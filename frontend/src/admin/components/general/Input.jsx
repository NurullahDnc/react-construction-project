import React from 'react'

const Input = ({name, text, type, value, placeholder}) => {
  return (
    <div className='inputGeneral' >
      <label htmlFor="">{text}</label>
      <input 
        className='inputGeneral-input'
        type={type} 
        name={name} 
        value={value} 
        placeholder={placeholder} />
    </div>

  )
}

export default Input
