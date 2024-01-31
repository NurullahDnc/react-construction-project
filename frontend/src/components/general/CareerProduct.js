import React from 'react'
import Button from '../general/Button'


export default function CareerProduct( {title, text, buttonText, url } ) {
  console.log(url);
  return (
    <div className='CareerProduct'>
        
        <h1 className='CareerProduct-title'>{title}</h1>
        <p className='CareerProduct-text'>{text}</p>
        <div className='CareerProduct-Button'>
          <a href={url}>
          <Button text={buttonText} />
          </a>

        </div>

    </div>
  )
}
