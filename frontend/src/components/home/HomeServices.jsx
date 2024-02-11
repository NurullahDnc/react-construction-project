import React from 'react'
import Heading from '../general/Heading'
import Button from '../general/Button'
import Services from '../general/ServicesProduct'
import { FaCity } from "react-icons/fa6";
import ContactUs from './ContactUs';
import ContactUsCol from '../general/ContactUsItem';
import { FaUser} from 'react-icons/fa';


export default function HomeServices() {
  return (
    <div className='HomeServices'>
      <div className='HomeServices-container'>
        <div className='HomeServices-container-title' >

          <Heading text=" İnşaat Bizim İşimiz" title="Kaliteli Projelerin İlk Adresi MCR İnşaat" />
          <Button text="daha fazla " url={"/project"} />

        </div>

        <div>
          <Services
            img={'iletisimimg.jpg'}
            icon={FaCity}
            title={"Neler Yapıyoruz"}
            text1={"   Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi laboriosam quod, numquam sapiente ducimus voluptate eaque aut consequatur ab odit, molestias quia? Aut voluptatum aperiam aliquam numquam reprehenderit libero cupiditate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi laboriosam quod, numquam sapiente ducimus voluptate eaque aut consequatur ab odit, molestias quia? Aut voluptatum aperiam aliquam numquam reprehenderit libero cupiditate.            "}
            text2={"   Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi laboriosam quod, numquam sapiente ducimus voluptate eaque aut consequatur ab odit, molestias quia? Aut voluptatum aperiam aliquam numquam reprehenderit libero cupiditate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi laboriosam quod, numquam sapiente ducimus voluptate eaque aut consequatur ab odit, molestias quia? Aut voluptatum aperiam aliquam numquam reprehenderit libero cupiditate.            "}

          />
            <Services
            img={'hakkımdabina.jpg'}
            icon={FaUser}
            title={"Hakkımızda"}
            text1={" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi laboriosam quod, numquam sapiente ducimus voluptate eaque aut consequatur ab odit, molestias quia? Aut voluptatum aperiam aliquam numquam reprehenderit libero cupiditate.            "}
            text2={"   Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi laboriosam quod, numquam sapiente ducimus voluptate eaque aut consequatur ab odit, molestias quia? Aut voluptatum aperiam aliquam numquam reprehenderit libero cupiditate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi laboriosam quod, numquam sapiente ducimus voluptate eaque aut consequatur        "}

          />
        </div>
  

      </div>
 

    </div>
  )
}
