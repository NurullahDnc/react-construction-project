import React, { useEffect } from 'react'
import ScrollReveal from 'scrollreveal';

export default function Heading({title, text, p}) {

  useEffect(()=>{
    ScrollReveal().reveal(".Heading", {
 
      distance: "190px", 
      origin: "left",
      duration: 1000
    })
  },[])

  return (
    <div className='Heading'>
        <h2 className='Heading-text' >{text} </h2>
        <h1 className='Heading-title'>{title}</h1>
        <p className='Heading-p'>{p}</p>

    </div>
  )
}
