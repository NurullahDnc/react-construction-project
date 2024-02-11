import React, { useEffect } from 'react'
import Button from '../general/Button'
import ScrollReveal from 'scrollreveal';


export default function Banner() {
  useEffect(()=>{
    ScrollReveal().reveal(".banner-text", {
 
      distance: "250px", 
      origin: "bottom",
      duration: 2000
      
    })
  },[])

  return (
    <div className='banner' >
  
      {/* <video className='banner-img' autoPlay loop muted>
          <source className='banner-img-video' src='https://video.wixstatic.com/video/c837a6_ae4f4741c31844bfba715de2983231fd/1080p/mp4/file.mp4' type='video/mp4' />

        </video>  */}
        <div className='banner-image'>
          <img className='banner-image-img' src="hd_duoemlak.webp" alt="" />  
        </div>  

  
      <div className='banner-text'>
        <h1 className='banner-text-title' >Saglam bir gelecek inşası</h1>
        <p className='banner-text-p' >1968'den Beri Dürüst, Güvenilir İnşaat</p>

        <Button text="bize ulaş" url={"/contact"} />

      </div>

    </div>
  )
}
 