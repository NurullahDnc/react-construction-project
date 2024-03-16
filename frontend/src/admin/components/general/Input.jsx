import React, { useState } from 'react'

const Input = ({name, text, type, value, placeholder, onChange}) => {

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className='inputGeneral' >
      <label htmlFor="">{text}</label>
      <input 
        className='inputGeneral-input'
        onChange={handleInputChange}
        name={name} 
        type={type} 
        value={value} 
        placeholder={placeholder} 
      />


    </div>

  )
}

export default Input
