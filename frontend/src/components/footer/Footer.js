import React from 'react'
import Heading from '../general/Heading'
import FooterItem from '../general/FooterItem'
import Button from '../general/Button'

export default function Footer() {
  return (
    <div className='Footer'>
      <div className='Footer-item' >
        logo  
      </div>

      <div className='Footer-item'>
       <FooterItem title="Adres" textone="Büyükdere Cad. No. 263 Sarıyer, İstanbul 34398" texttwo="212-354-56-78"  />
      </div>
      <div className='Footer-item'>
       <FooterItem title="sosyal medya" textone="facebook" texttwo="Instagram" textthree="LinkedIn" />
      </div><div className='Footer-item'>
       <FooterItem title="Sorular" textone="Teklif talepleri ve sorular için lütfen arayın:" texttwo="212-354-56-78" />
      </div>
 

      <div className='Footer-item Footer-Button '>
        <Button text="Bize Ulaş" />
      </div>
         
    </div>
  )
}
 