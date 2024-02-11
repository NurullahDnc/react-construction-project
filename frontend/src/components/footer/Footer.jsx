import React, { useEffect } from 'react'
import Heading from '../general/Heading'
import FooterItem from '../general/FooterItem'
import Button from '../general/Button'
import ScrollReveal from 'scrollreveal';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';


export default function Footer() {

  const navgate = useNavigate();
  useEffect(() => {
    ScrollReveal().reveal(".one, .three", {

      distance: "50px",
      origin: "top",
      duration: 2000
    })

    ScrollReveal().reveal(".two", {
      duration: 2000,
      distance: "50px",
    })

  }, [])

  return (
    <div className='Footer'>
      <div className='Footer-left'>
        <h1>Trendyol</h1>
        <div className='Footer-left-text'>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quaerat similique officiis neque provident vitae error harum? Sapiente, at libero. Quam quis nesciunt odit eligendi nulla facere doloremque veritatis totam?
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque esse cum nam voluptate perferendis aspernatur tempore? Consequuntur a veritatis alias voluptatibus nihil error, officia cumque suscipit eum voluptate voluptatum hic.
          </span>

        </div>
        <div className='Footer-left-social'>
          <ul>
            <li><Link to={"/"}><FaFacebook size={25} /></Link> </li>
            <li><Link to={"/"}><FaInstagram size={25} /></Link> </li>
            <li><Link to={"/"}><FaLinkedin size={25} /></Link> </li>
            <li><Link to={"/"}><FaTwitter size={25} /></Link> </li>


          </ul>
          <p>Tescilli Markasıdır. © 2017 - 2024 Tüm Hakları Saklıdır. KVKK | Yasal  </p>
        </div>

      </div>

      <div className='Footer-right'>
        <h1>İletisime Geç</h1>

        <div className='Footer-right-form'>
          <input type="text" placeholder='E-posta adresiniz' />
          <button onClick={() => navgate("/contact")} >Gonder</button>
        </div>
        <div className='Footer-right-menu'>
          <ul>
            <li>Home</li>
            <li><Link to='service'>Hizmetler</Link></li>
            <li><Link to='/project'>Projeler</Link></li>
            <li><Link to='/about'>Hakkımızda</Link></li>
            <li><Link to='/career'>Karier</Link></li>
            <li><Link to='/contact'>İletişim</Link></li>
          </ul>
          <ul>
            <li> Yardım </li>
            <li><Link to='/contact'>İletişim</Link></li>
          </ul>
          <ul>
            <li>Sosyal</li>
            <li><Link to='/'>Facebook</Link></li>
            <li><Link to='/'>Instagram</Link></li>
            <li><Link to='/'>LinkedIn</Link></li>
            <li><Link to='/'>Twitter</Link></li>
          </ul>
        </div>
      </div>

    </div>
  )
}



/*

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
*/