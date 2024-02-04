import React, { useEffect, useState } from 'react'
import Heading from '../general/Heading'
import ProjectProduct from '../general/ProjectProduct'
import Category from './Category'
import ScrollReveal from 'scrollreveal';

export default function ProjectComps() {

  const productData = [
    {
      id: "1",
      img: "c837a6_136f489b41d445c38ff79f772d719210~mv2.webp",
      title: "Villa Rezidans ",
      text: "Bu, bir paragraf. Kendi metninizi eklemek için tıklayın. İçeriğinizi eklemek ve yazı tipini değiştirmek için “Metni Düzenle”ye tıklayın veya buraya çift tıklayın. Bu alanı sayfanın istediğiniz bir yerine sürükleyip bırakabilirsiniz.",
      category: "Villa"
    },
    {
      id: "2",
      img: "c837a6_8abb4ef5216643d59e06aef027a9c7d1~mv2.webp",
      title: "Kule Otobanı",
      text: "Bu, bir paragraf. Kendi metninizi eklemek için tıklayın. İçeriğinizi eklemek ve yazı tipini değiştirmek için “Metni Düzenle”ye tıklayın veya buraya çift tıklayın. Bu alanı sayfanın istediğiniz bir yerine sürükleyip bırakabilirsiniz.",
      category: "Kule"
    }, {
      id: "3",
      img: "c837a6_7e9b1e4c7d834bde8aaefc3b04269ad4~mv2.webp",
      title: "Kule Sanayi Bölgesi",
      text: "Bu, bir paragraf. Kendi metninizi eklemek için tıklayın. İçeriğinizi eklemek ve yazı tipini değiştirmek için “Metni Düzenle”ye tıklayın veya buraya çift tıklayın. Bu alanı sayfanın istediğiniz bir yerine sürükleyip bırakabilirsiniz.",
      category: "Kule"
    },
    {
      id: "4",
      img: "c837a6_7e9b1e4c7d834bde8aaefc3b04269ad4~mv2.webp",
      title: "Villa Gölü Köprüsü ",
      text: "Bu, bir paragraf. Kendi metninizi eklemek için tıklayın. İçeriğinizi eklemek ve yazı tipini değiştirmek için “Metni Düzenle”ye tıklayın veya buraya çift tıklayın. Bu alanı sayfanın istediğiniz bir yerine sürükleyip bırakabilirsiniz.",
      category: "Villa"
    }, {
      id: "5",
      img: "c837a6_8abb4ef5216643d59e06aef027a9c7d1~mv2.webp",
      title: "Villa, Kemerburgaz ",
      text: "Bu, bir paragraf. Kendi metninizi eklemek için tıklayın. İçeriğinizi eklemek ve yazı tipini değiştirmek için “Metni Düzenle”ye tıklayın veya buraya çift tıklayın. Bu alanı sayfanın istediğiniz bir yerine sürükleyip bırakabilirsiniz.",
      category: "Villa"
    },
    {
      id: "6",
      img: "c837a6_7e9b1e4c7d834bde8aaefc3b04269ad4~mv2.webp",
      title: "Restorasyon Barbaros Evleri ",
      text: "Bu, bir paragraf. Kendi metninizi eklemek için tıklayın. İçeriğinizi eklemek ve yazı tipini değiştirmek için “Metni Düzenle”ye tıklayın veya buraya çift tıklayın. Bu alanı sayfanın istediğiniz bir yerine sürükleyip bırakabilirsiniz.",
      category: "Restorasyon"
    },
    {
      id: "7",

      img: "c837a6_8abb4ef5216643d59e06aef027a9c7d1~mv2.webp",
      title: "Restorasyon ",
      text: "Bu, bir paragraf. Kendi metninizi eklemek için tıklayın. İçeriğinizi eklemek ve yazı tipini değiştirmek için “Metni Düzenle”ye tıklayın veya buraya çift tıklayın. Bu alanı sayfanın istediğiniz bir yerine sürükleyip bırakabilirsiniz.",
      category: "Restorasyon"
    },
    {
      id: "8",

      img: "c837a6_8abb4ef5216643d59e06aef027a9c7d1~mv2.webp",
      title: "Restorasyon ",
      text: "Bu, bir paragraf. Kendi metninizi eklemek için tıklayın. İçeriğinizi eklemek ve yazı tipini değiştirmek için “Metni Düzenle”ye tıklayın veya buraya çift tıklayın. Bu alanı sayfanın istediğiniz bir yerine sürükleyip bırakabilirsiniz.",
      category: "Restorasyon"
    },
    {
      id: "9",

      img: "c837a6_7e9b1e4c7d834bde8aaefc3b04269ad4~mv2.webp",
      title: "Sağlık ",
      text: "Bu, bir paragraf. Kendi metninizi eklemek için tıklayın. İçeriğinizi eklemek ve yazı tipini değiştirmek için “Metni Düzenle”ye tıklayın veya buraya çift tıklayın. Bu alanı sayfanın istediğiniz bir yerine sürükleyip bırakabilirsiniz.",
      category: "Sağlık Kuruluşu"
    },
    {
      id: "10",

      img: "c837a6_7e9b1e4c7d834bde8aaefc3b04269ad4~mv2.webp",
      title: "Villa ",
      text: "Bu, bir paragraf. Kendi metninizi eklemek için tıklayın. İçeriğinizi eklemek ve yazı tipini değiştirmek için “Metni Düzenle”ye tıklayın veya buraya çift tıklayın. Bu alanı sayfanın istediğiniz bir yerine sürükleyip bırakabilirsiniz.",
      category: "Villa"
    }, {
      id: "11",

      img: "c837a6_7e9b1e4c7d834bde8aaefc3b04269ad4~mv2.webp",
      title: "Sağlık ",
      text: "Bu, bir paragraf. Kendi metninizi eklemek için tıklayın. İçeriğinizi eklemek ve yazı tipini değiştirmek için “Metni Düzenle”ye tıklayın veya buraya çift tıklayın. Bu alanı sayfanın istediğiniz bir yerine sürükleyip bırakabilirsiniz.",
      category: "Sağlık Kuruluşu"
    },
    {
      id: "12",
      img: "c837a6_7e9b1e4c7d834bde8aaefc3b04269ad4~mv2.webp",
      title: "Eğitim ",
      text: "Bu, bir paragraf. Kendi metninizi eklemek için tıklayın. İçeriğinizi eklemek ve yazı tipini değiştirmek için “Metni Düzenle”ye tıklayın veya buraya çift tıklayın. Bu alanı sayfanın istediğiniz bir yerine sürükleyip bırakabilirsiniz.",
      category: "Eğitim"
    },
  ]

  const category = [
    { id: 1, name: "Tümü" },
    { id: 2, name: "Villa", },
    { id: 3, name: "Eğitim", },
    { id: 4, name: "Sağlık Kuruluşu" },
    { id: 5, name: "Restorasyon", },
    { id: 7, name: "Otel", },
    { id: 8, name: "Ögrenci Yurdu", },
    { id: 9, name: "Kule", },
    { id: 10, name: "Konut", },
    { id: 11, name: "Konferans Salonu", },

  ]

  const [selectedProject, setSelectedProject] = useState("Tümü");

  //tıklanan kategori alıyor,  usestate at
  const handleSubmit = (item) => {
    setSelectedProject(item.name)
    console.log("Seçili Proje:", selectedProject);

  }

  // projeleri kategoriye gore filter yap degiskene at, selectedProject Tümü esit ise productdata don degil ise filter yap
  const filterProduct = selectedProject === "Tümü" ? productData : productData.filter(product => product.category === selectedProject)
  
  
  useEffect(() => {
    ScrollReveal().reveal('.ProjectComps-container-product', {
      interval: 500,
      duration: 1000,
      rotate: {x:20, y:20}
      
    });
  }, [filterProduct]);

  return (
    <div className='ProjectComps headline'>

      <Heading text="Projelerimiz" title="Dayanıklı Projeler Üretiyoruz"  />

      <div className='ProjectComps-category' >
        {
          category.map((item, i) => (
            <div key={i} onClick={() => handleSubmit(item)}>
              <Category
                key={i}
                cate={item.name}
                url={item.url}
              />
            </div>
          ))
        }
      </div>

      {
        filterProduct.length == 0 ?
          <div className='ProjectComps-productNull'> Bu Kategoride Projemiz Yok </div> :
          <div className='ProjectComps-container'>
            {filterProduct.map((item, i) => (
              <div className='ProjectComps-container-product  ' key={i}>
                <ProjectProduct id={item.id} img={item.img} text={item.title} />
              </div>
            ))}

          </div>
      }


 
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
