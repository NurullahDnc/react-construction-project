import React from 'react'

export default function FooterItem({title, textone, texttwo, textthree, textfour}) {
  return (
    <div className='footerItem'>
        <ul className='footerItem-items'>
            <li>{title}</li>
            <li>{textone}</li>
            <li>{texttwo}</li>
            <li>{textthree}</li>

        </ul>
      
    </div>
  )
}
