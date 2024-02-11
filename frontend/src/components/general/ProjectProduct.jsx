import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ProjectProduct({img, text, id}) {

  const navigate = useNavigate();

  const handleClick =()=>{
    window.scrollTo(0, 0)
    navigate(`/detail/${id}`)
  }

  return (
    <div className='ProjectProduct'>
      <div onClick={handleClick} className='ProjectProduct-img'>
        <img className='ProjectProduct-img-imgs' src={img} alt="" />
      </div>
      <div className='ProjectProduct-text'>
        {text}
      </div>
    </div>
  )
}
