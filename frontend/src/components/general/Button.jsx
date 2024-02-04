import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import ScrollReveal from 'scrollreveal';


export default function Button({text, url}) {

  useEffect(()=>{
    ScrollReveal().reveal(".general-button",{

      distance: "50px",
      origin: "top",
      duration: 2000
    })

  },[])

  return (
    <div >
       
        <button className='general-button' >  
          <Link to={url} alt="Button">
            {text}
          </Link> 
        </button>
    </div>
  )
}
