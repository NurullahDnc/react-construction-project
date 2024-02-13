import React, { useEffect } from 'react'
import Heading from '../general/Heading'
import FooterItem from '../general/FooterItem'
import PageTitle from '../general/PageTitle'
import { useDispatch, useSelector } from 'react-redux'
import { getAbout } from '../../redux/AboutSlice'
import ScrollReveal from 'scrollreveal';

export default function AboutComps() {

  const {about} = useSelector((state)=> state.about)
  const dispacth = useDispatch()
  
  useEffect(()=>{
    dispacth(getAbout())
  },[dispacth])

  ScrollReveal().reveal('.AboutComps-text-item',{
    distance: "200px",
    origin: "top",

  });


  return (
    <div>
      <PageTitle title="Hakkımızda" />
      <Heading title="Sizin İçin İnşa Ediyoruz" />

      <div className='AboutComps'>
        <div className='AboutComps-img'>
          <img className='ProjectProduct-img-imgs' src="hakkımdaimg.jpg" alt="" />
        </div>
        <div className='AboutComps-text' >

         

           {
              about.map(item => (
                <div className='AboutComps-text-item'>
                <h1>{item.title} </h1>
                <p>{item.text} </p>

              </div>

          
              ))
            }
         
        </div>

      </div>
    </div>
  )
}



