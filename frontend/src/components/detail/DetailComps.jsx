import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import ScrollReveal from 'scrollreveal';

export default function DetailComps() {

  const productData =[
    {
      id:"1",
      img:"c837a6_8abb4ef5216643d59e06aef027a9c7d1~mv2.webp",
      title: "deneme ",
      text: "Bu, bir paragraf. Kendi metninizi eklemek için tıklayın. İçeriğinizi eklemek ve yazı tipini değiştirmek için “Metni Düzenle”ye tıklayın veya buraya çift tıklayın. Bu alanı sayfanın istediğiniz bir yerine sürükleyip bırakabilirsiniz.",
      text2: "Bu, bir paragraf. Kendi metninizi eklemek için tıklayın. İçeriğinizi eklemek ve yazı tipini değiştirmek için “Metni Düzenle”ye tıklayın veya buraya çift tıklayın. Bu alanı sayfanın istediğiniz bir yerine sürükleyip bırakabilirsiniz."
      
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

  //ürl her zaman str gelir
  const {id} = useParams();

  // console.log(id);

  const newData = productData.find((product)=>( product.id == id ))


  console.log(newData);

  useEffect(()=>{
    ScrollReveal().reveal(".DetailComps-left",{

      distance: "150px",
      origin: "left",
      duration: 2000
    })

    ScrollReveal().reveal(".DetailComps-right",{
      duration: 2000,
      origin: "right",
      distance: "150px",
     })

  },[])


  return (
    <div className='DetailComps'>

      <div className='DetailComps-left'>
        <img className='DetailComps-left-img' src={`/${newData.img}`} alt="yüklenmedi" />
      </div>

      <div className='DetailComps-right' >
        <h2 className='DetailComps-title'>{newData.title} </h2>
        <p>{newData.text} </p>
        <p>{newData.text2} </p>

      </div>
     </div>
  )
}

//find    = kosulu saglayan ilk oge dondurur, bir tane oge dondurur.
//filter  = kosulu saglayan tüm ogeleri dondurur.
