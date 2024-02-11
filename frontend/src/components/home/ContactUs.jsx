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
                <Heading title="Şirketimiz Hakkında" p="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi laboriosam quod, numquam sapiente ducimus voluptate eaque aut consequatur ab odit, molestias quia? Aut voluptatum aperiam aliquam numquam reprehenderit libero cupiditate." />
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
