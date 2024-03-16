import React, { useEffect } from 'react'
import BrandItem from '../general/BrandItem'
import Heading from '../general/Heading'
import ScrollReveal from 'scrollreveal';


export default function Brand() {

  const brand = [
    { img: "marka.webp" },
    { img: "Hardware_Store_Logos-05.webp" },
    { img: "marka.webp" },
    { img: "Hardware_Store_Logos-05.webp" },
    { img: "marka.webp" },

  ]

  
  
  return (
    <div className='brand'>

      <Heading text={"Müşterilerimiz"} title={"Birlikte İnşa Ediyoruz"} />

      <div className='brand-items'>

        {
          brand.map((item, i) => (
            <BrandItem key={i} img={item.img} />
          ))
        }

      </div>
    </div>
  )
}
