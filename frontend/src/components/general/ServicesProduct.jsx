import React, { useEffect } from 'react'
import ScrollReveal from 'scrollreveal';


export default function ServicesProduct({img, icon:Icon, title, text1, text2}) {

  useEffect(()=>{
    ScrollReveal().reveal(".services-image", {
      scale: 1.1
    })

  },[])

  return (
    <div className='services'>
        
        <div className='services-image'>
            <img className='services-image-img' src={img} />
        </div>

        <div className='services-text'>
            <Icon className="services-text-icon" size="50" />
            <h1>{title} </h1>
            <p>{text1} </p>
            <p>{text2} </p>

        </div>

    </div>
  )
}

