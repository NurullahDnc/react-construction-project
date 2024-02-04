import React from 'react'

export default function AdminButton({text, onClicks}) {
  return (
    <button onClick={onClicks} className='adminButton' >{text} </button>
  )
}
