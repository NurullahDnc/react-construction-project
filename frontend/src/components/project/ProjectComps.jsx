import React from 'react'
import Heading from '../general/Heading'
import ProjectProduct from '../general/ProjectProduct'

export default function ProjectComps() {

  const productData =[
    {
      id:"1",
      img:"c837a6_136f489b41d445c38ff79f772d719210~mv2.webp",
      title: "deneme ",
      text: "Bu, bir paragraf. Kendi metninizi eklemek için tıklayın. İçeriğinizi eklemek ve yazı tipini değiştirmek için “Metni Düzenle”ye tıklayın veya buraya çift tıklayın. Bu alanı sayfanın istediğiniz bir yerine sürükleyip bırakabilirsiniz."
    },
    {
      id:"2",
      img:"c837a6_8abb4ef5216643d59e06aef027a9c7d1~mv2.webp",
      title: "deneme ",
      text: "Bu, bir paragraf. Kendi metninizi eklemek için tıklayın. İçeriğinizi eklemek ve yazı tipini değiştirmek için “Metni Düzenle”ye tıklayın veya buraya çift tıklayın. Bu alanı sayfanın istediğiniz bir yerine sürükleyip bırakabilirsiniz."
     },{
      id:"3",
      img:"c837a6_7e9b1e4c7d834bde8aaefc3b04269ad4~mv2.webp",
      title: "deneme ",
      text: "Bu, bir paragraf. Kendi metninizi eklemek için tıklayın. İçeriğinizi eklemek ve yazı tipini değiştirmek için “Metni Düzenle”ye tıklayın veya buraya çift tıklayın. Bu alanı sayfanın istediğiniz bir yerine sürükleyip bırakabilirsiniz."
     },
    {
      id:"4",
      img:"c837a6_7e9b1e4c7d834bde8aaefc3b04269ad4~mv2.webp",
      title: "deneme ",
      text: "Bu, bir paragraf. Kendi metninizi eklemek için tıklayın. İçeriğinizi eklemek ve yazı tipini değiştirmek için “Metni Düzenle”ye tıklayın veya buraya çift tıklayın. Bu alanı sayfanın istediğiniz bir yerine sürükleyip bırakabilirsiniz."
     }, {
      id:"5",
      img:"c837a6_8abb4ef5216643d59e06aef027a9c7d1~mv2.webp",
      title: "deneme ",
      text: "Bu, bir paragraf. Kendi metninizi eklemek için tıklayın. İçeriğinizi eklemek ve yazı tipini değiştirmek için “Metni Düzenle”ye tıklayın veya buraya çift tıklayın. Bu alanı sayfanın istediğiniz bir yerine sürükleyip bırakabilirsiniz."
     },
    {
      id:"6",
      img:"c837a6_7e9b1e4c7d834bde8aaefc3b04269ad4~mv2.webp",
      title: "deneme ",
      text: "Bu, bir paragraf. Kendi metninizi eklemek için tıklayın. İçeriğinizi eklemek ve yazı tipini değiştirmek için “Metni Düzenle”ye tıklayın veya buraya çift tıklayın. Bu alanı sayfanın istediğiniz bir yerine sürükleyip bırakabilirsiniz."
     },
    {
      id:"7",

      img:"c837a6_8abb4ef5216643d59e06aef027a9c7d1~mv2.webp",
      title: "deneme ",
      text: "Bu, bir paragraf. Kendi metninizi eklemek için tıklayın. İçeriğinizi eklemek ve yazı tipini değiştirmek için “Metni Düzenle”ye tıklayın veya buraya çift tıklayın. Bu alanı sayfanın istediğiniz bir yerine sürükleyip bırakabilirsiniz."
     },
    {
      id:"8",

      img:"c837a6_8abb4ef5216643d59e06aef027a9c7d1~mv2.webp",
      title: "deneme ",
      text: "Bu, bir paragraf. Kendi metninizi eklemek için tıklayın. İçeriğinizi eklemek ve yazı tipini değiştirmek için “Metni Düzenle”ye tıklayın veya buraya çift tıklayın. Bu alanı sayfanın istediğiniz bir yerine sürükleyip bırakabilirsiniz."
     },
    {
      id:"9",

      img:"c837a6_7e9b1e4c7d834bde8aaefc3b04269ad4~mv2.webp",
      title: "deneme ",
      text: "Bu, bir paragraf. Kendi metninizi eklemek için tıklayın. İçeriğinizi eklemek ve yazı tipini değiştirmek için “Metni Düzenle”ye tıklayın veya buraya çift tıklayın. Bu alanı sayfanın istediğiniz bir yerine sürükleyip bırakabilirsiniz."
     },
    {
      id:"10",

      img:"c837a6_7e9b1e4c7d834bde8aaefc3b04269ad4~mv2.webp",
      title: "deneme ",
      text: "Bu, bir paragraf. Kendi metninizi eklemek için tıklayın. İçeriğinizi eklemek ve yazı tipini değiştirmek için “Metni Düzenle”ye tıklayın veya buraya çift tıklayın. Bu alanı sayfanın istediğiniz bir yerine sürükleyip bırakabilirsiniz."
     }, {
      id:"11",

      img:"c837a6_7e9b1e4c7d834bde8aaefc3b04269ad4~mv2.webp",
      title: "deneme ",
      text: "Bu, bir paragraf. Kendi metninizi eklemek için tıklayın. İçeriğinizi eklemek ve yazı tipini değiştirmek için “Metni Düzenle”ye tıklayın veya buraya çift tıklayın. Bu alanı sayfanın istediğiniz bir yerine sürükleyip bırakabilirsiniz."
     },
    {
      id:"12",
      img:"c837a6_7e9b1e4c7d834bde8aaefc3b04269ad4~mv2.webp",
      title: "deneme ",
      text: "Bu, bir paragraf. Kendi metninizi eklemek için tıklayın. İçeriğinizi eklemek ve yazı tipini değiştirmek için “Metni Düzenle”ye tıklayın veya buraya çift tıklayın. Bu alanı sayfanın istediğiniz bir yerine sürükleyip bırakabilirsiniz."
     },
  ]

  return (
       <div className='ProjectComps'>

         <Heading text="Projelerimiz" title="Dayanıklı Projeler Üretiyoruz" p="Bu, bir paragraf. Kendi metninizi eklemek için tıklayın. Kullanıcılara kendinizi tanıtın." />
         <div className='ProjectComps-container'>
         
         
          

            {productData.map((item, i) => (
          <div className='ProjectComps-container-product  ' key={i}>
            <ProjectProduct id={item.id} img={item.img} text={item.title} />
          </div>
        ))}
            

         </div>
        </div>
  )
}





/*


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
         
         
            <div className='ProjectComps-container-product'>
              <div className='ProjectComps-container-product-image'>
                <img className='ProjectComps-container-product-image-img' src="c837a6_7e9b1e4c7d834bde8aaefc3b04269ad4~mv2.webp" alt="" />
              </div>
              <div className='ProjectComps-container-product-text'>
                tesera
              </div  v>
            </div>
            

         </div>
        </div>
  )
}
*/
