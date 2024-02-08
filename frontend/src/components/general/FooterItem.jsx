import React from 'react'
import { NavLink } from 'react-router-dom'

export default function FooterItem({title, textone, texttwo, textthree, textfour, url}) {
  return (
    <div className='footerItem'>
        <ul className='footerItem-items'>
            <li>{title}</li>
            <li><a href={url} >{textone}</a> </li>
            <li><a href={url} >{texttwo}</a> </li>
            <li><a href={url} >{textthree}</a> </li>
        </ul>
      
    </div>
  )
}
