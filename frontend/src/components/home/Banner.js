import React from 'react'
import Button from '../general/Button'

export default function Banner() {
  return (
    <div className='banner' >
      <div >
      <video className='banner-img' autoPlay loop muted>
          <source className='banner-img-video' src='https://video.wixstatic.com/video/c837a6_ae4f4741c31844bfba715de2983231fd/1080p/mp4/file.mp4' type='video/mp4' />
         
        </video>      
      </div>
      <div className='banner-text'>
        <h1 className='banner-text-title' >Saglam bir gelecek insası</h1>
        <p className='banner-text-p' >1968'den Beri Dürüst, Güvenilir İnşaat</p>

        <Button text="bize ulas" />

      </div>

    </div>
  )
}
 