import React from 'react'
import Heading from '../general/Heading'
import ContactUsCol from '../general/ContactUsItem'
import { FaCity } from "react-icons/fa6";


export default function ContactUs() {
  return (
    <div className='ContactUs'>

        <div className='ContactUs-image' >
            <img className='ContactUs-image-images' src="c837a6_eb05560eb8764160936d511f9cb1af73~mv2.webp" alt="" />
        </div>
        <div className='ContactUs-text' >
            <div>
                <Heading title="Şirketimiz Hakkında" p="Bu, bir paragraf. Kendi metninizi eklemek için tıklayın. İçeriğinizi eklemek ve yazı tipini değiştirmek için “Metni Düzenle”ye tıklayın veya buraya çift tıklayın. Burası, bir hikâye anlatmak ve kullanıcılarınıza kendinizi tanıtmak için harika bir yer." />
            </div>
            <div className="ContactUs-icons" >
            <ContactUsCol icon={FaCity} number="2002" text="kuruluş yılı" />
            <ContactUsCol icon={FaCity} number="285" text="Tamamlanan proje" />
            <ContactUsCol icon={FaCity} number="268" text="Profesyonel Çalışan" />
            <ContactUsCol icon={FaCity} number="12" text="İş Ortağı" />

                
            </div>
        </div>
      
    </div>
  )
}
