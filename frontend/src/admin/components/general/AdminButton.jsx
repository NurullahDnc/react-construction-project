import React from 'react'

export default function AdminButton({text, onClicks, type}) {
  return (
    <button onClick={onClicks} type={type} className='adminButton' >{text} </button>
  )
}
