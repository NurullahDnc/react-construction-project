import React from 'react'



export default function ContactUsItem({icon:Icon, number, text}) {
  return (
    <div className='ContactUsCol' >

        <p className='ContactUsCol-icon'><Icon size="25px" /></p>
        <h1 className='ContactUsCol-number' > {number}</h1>
        <p className='ContactUsCol-text' >{text} </p>

      
    </div>
    
  )
}



