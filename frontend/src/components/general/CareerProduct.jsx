import React, { useEffect } from 'react'
import Button from '../general/Button'
import ScrollReveal from 'scrollreveal';



export default function CareerProduct( {title, text, buttonText, url } ) {

  useEffect(() => {
    ScrollReveal().reveal('.CareerProduct', {
      interval: 500,
      duration: 1000,
      rotate: {x:10, y:10}
      
    });
  }, []);

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
