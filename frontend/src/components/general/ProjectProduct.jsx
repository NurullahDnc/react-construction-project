import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ProjectProduct({img, text, id}) {

  const navigate = useNavigate();

  return (
    <div className='ProjectProduct'>
      <div onClick={()=> navigate(`/detail/${id}`)} className='ProjectProduct-img'>
        <img className='ProjectProduct-img-imgs' src={img} alt="" />
      </div>
      <div className='ProjectProduct-text'>
        {text}
      </div>
    </div>
  )
}
