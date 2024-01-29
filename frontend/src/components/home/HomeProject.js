import React from 'react'
import Heading from '../general/Heading'
import Button from '../general/Button'
import Services from '../general/ServicesProduct'
import { FaCity } from "react-icons/fa6";
import ContactUs from './ContactUs';
import ContactUsCol from '../general/ContactUsItem';


export default function HomeProject() {
  return (
    <div className='home'>
      <div className='home-container'>
        <div className='home-container-title' >

          <Heading text=" İnşaat Bizim İşimiz" title="Kaliteli Projelerin İlk Adresi MCR İnşaat" />
          <Button text="daha fazla " />

        </div>

        <div>
          <Services
            img={'c837a6_136f489b41d445c38ff79f772d719210~mv2.webp'}
            icon={FaCity}
            text1={"Bu, bir paragraf. Kendi metninizi eklemek için tıklayın. İçeriğinizi eklemek ve yazı tipini değiştirmek için “Metni Düzenle”ye tıklayın veya buraya çift tıklayın. Bu alanı sayfanın istediğiniz bir yerine sürükleyip bırakabilirsiniz."}
            text2={"Bu, bir paragraf. Kendi metninizi eklemek için tıklayın. İçeriğinizi eklemek ve yazı tipini değiştirmek için “Metni Düzenle”ye tıklayın veya buraya çift tıklayın. Bu alanı sayfanın istediğiniz bir yerine sürükleyip bırakabilirsiniz."}

          />
        </div>
  

      </div>


    </div>
  )
}
