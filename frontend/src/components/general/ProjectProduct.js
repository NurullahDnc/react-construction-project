import React from 'react'

export default function ProjectProduct({img, text}) {
  return (
    <div className='ProjectProduct'>
      <div className='ProjectProduct-img'>
        <img className='ProjectProduct-img-imgs' src={img} alt="" />
      </div>
      <div className='ProjectProduct-text'>
        {text}
      </div>
    </div>
  )
}
