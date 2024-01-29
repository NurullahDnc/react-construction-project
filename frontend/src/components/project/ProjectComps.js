import React from 'react'
import Heading from '../general/Heading'
import ProjectProduct from '../general/ProjectProduct'

export default function ProjectComps() {

  const productData =[
    {
      img:"c837a6_136f489b41d445c38ff79f772d719210~mv2.webp",
      text: "deneme "
    },
    {
      img:"c837a6_136f489b41d445c38ff79f772d719210~mv2.webp",
      text: "deneme "
    },
    {
      img:"c837a6_136f489b41d445c38ff79f772d719210~mv2.webp",
      text: "deneme "
    }
  ]

  return (
       <div className='ProjectComps'>

         <Heading text="Projelerimiz" title="Dayanıklı Projeler Üretiyoruz" p="Bu, bir paragraf. Kendi metninizi eklemek için tıklayın. Kullanıcılara kendinizi tanıtın." />
         <div className='ProjectComps-container'>
         
         
         {productData.map((item, i) => (
          <div className='ProjectComps-container-product  ' key={i}>
            <ProjectProduct img={item.img} text={item.text} />
          </div>
        ))}


         </div>
        </div>
  )
}
