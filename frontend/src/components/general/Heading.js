import React from 'react'

export default function Heading({title, text, p}) {
  return (
    <div className='Heading'>
        <h2 className='Heading-text' >{text} </h2>
        <h1 className='Heading-title'>{title}</h1>
        <p className='Heading-p'>{p}</p>

    </div>
  )
}
