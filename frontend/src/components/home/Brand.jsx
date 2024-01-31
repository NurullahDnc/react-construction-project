import React from 'react'
import BrandItem from '../general/BrandItem'
import Heading from '../general/Heading'

export default function Brand() {

  const brand = [
    { img: "Hardware_Store_Logos-11.webp" },
    { img: "Hardware_Store_Logos-05.webp" },
    { img: "Hardware_Store_Logos-11.webp" },
    { img: "Hardware_Store_Logos-05.webp" },
    { img: "Hardware_Store_Logos-11.webp" },
    { img: "Hardware_Store_Logos-11.webp" },
    { img: "Hardware_Store_Logos-05.webp" },
    { img: "Hardware_Store_Logos-11.webp" },
    { img: "Hardware_Store_Logos-11.webp" },
    { img: "Hardware_Store_Logos-05.webp" },

  ]

  
  return (
    <div className='brand'>

      <Heading text={"Müşterilerimiz"} title={"Bizim için her müşteri uzun vadeli bir ortaklıktır"} />

      <div className='brand-items'>

        {
          brand.map(item => (
            <BrandItem img={item.img} />
          ))
        }

      </div>
    </div>
  )
}
