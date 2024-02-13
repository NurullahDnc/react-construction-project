import React, { useEffect } from 'react'
import ScrollReveal from 'scrollreveal';


export default function ServicesProduct({img, icon:Icon, title, text1, text2}) {

  useEffect(()=>{
    ScrollReveal().reveal(".services-image", {
      scale: 1.2,
      duration: 1000
    })
    
  },[])

  return (
    <div className='services'>
        
        <div className='services-image'>
            <img className='services-image-img' src={img} />
        </div>

        <div className='services-text'>
            {Icon && <Icon className="services-text-icon" size="40" /> }
            <h1>{title} </h1>
            <p className='services-text-p' >{text1} </p>
            <p className='services-text-p' >{text2} </p>

        </div>

    </div>
  )
}

