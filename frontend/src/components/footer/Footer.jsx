import React, { useEffect } from 'react'
import Heading from '../general/Heading'
import FooterItem from '../general/FooterItem'
import Button from '../general/Button'
import ScrollReveal from 'scrollreveal';


export default function Footer() {

  useEffect(()=>{
    ScrollReveal().reveal(".one, .three",{

      distance: "50px",
      origin: "top",
      duration: 2000
    })

    ScrollReveal().reveal(".two",{
      duration: 2000,
      distance: "50px",
     })

  },[])

  return (
    <div className='Footer'>
      <div className='Footer-item' >
        logo  
      </div>

      <div className='Footer-item one'>
       <FooterItem title="Adres" textone="Büyükdere Cad. No. 263 Sarıyer, İstanbul 34398" texttwo="212-354-56-78"  />
      </div>
      <div className='Footer-item two'>
       <FooterItem title="sosyal medya" textone="facebook" texttwo="Instagram" textthree="LinkedIn" />
      </div><div className='Footer-item three'>
       <FooterItem title="Sorular" textone="Teklif talepleri ve sorular için lütfen arayın:" texttwo="212-354-56-78" />
      </div>
 

      <div className='Footer-item Footer-Button '>
        <Button text="Bize Ulaş" url={"/contact"} />
      </div>
         
    </div>
  )
}
 