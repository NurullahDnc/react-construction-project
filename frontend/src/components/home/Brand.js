import React from 'react'
import BrandItem from '../general/BrandItem'

export default function Brand() {

  const brand = [
    {text:"marka"},
    {text:"Koc"},
    {text:"Sasa"},
    {text:"Ustun"},
    {text:"Ülker"},
    {text:"Sabancı"},
    {text:"Sabancı"}


  ]

  return (
    <div className='brand'>
        
        {
          brand.map(item =>(
              <BrandItem text={item.text} />
          ))
        }




    </div>
  )
}
