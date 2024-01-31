import React from 'react'
import Heading from '../general/Heading'
import Button from '../general/Button'


export default function ContactComps() {
  return (
    <div>
      <Heading text={"bize Ulaşın"} title={"Teklif Talepleri ya da Sorular:"} p={"Lütfen formu doldurun ya da bizi arayın: (212) 234 56 78"} />

      <div className='ContactComps'>
        <form className='ContactComps-form'>
            <div className='ContactComps-form-item' >
              <input type="text" placeholder='Adı' required />
              <input type="text" placeholder='Soyadı' />
            </div>
            <div className='ContactComps-form-item' >
              <input type="text" placeholder='E-Posta' required />
              <input type="text" placeholder='konu' />
            </div>
            <div className='ContactComps-form-item' >
              <textarea name="" placeholder='Mesaj' id="" cols="40" rows="15" required></textarea>
            </div>
            <Button text="Gonder" />
        </form>

        <div className='ContactComps-img'>
          <img src="c837a6_136f489b41d445c38ff79f772d719210~mv2.webp" alt="" />
        </div>
      </div>
    </div>
  )
}
