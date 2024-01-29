import React from 'react'
import Heading from '../general/Heading'
import Services from '../general/ServicesProduct';
import { FaCity } from "react-icons/fa6";
import PageContainers from '../../Containers/PageContainers'



export default function ServicesComps() {

  const servicesData = [
    {
      img:"c837a6_136f489b41d445c38ff79f772d719210~mv2.webp",
      icon: "FaCity",
      text1: "Bu, bir paragraf. Kendi metninizi eklemek için tıklayın. İçeriğinizi eklemek ve yazı tipini değiştirmek için “Metni Düzenle”ye tıklayın veya buraya çift tıklayın. Bu alanı sayfanın istediğiniz bir yerine sürükleyip bırakabilirsiniz.",
      text2: "Bu, bir paragraf. Kendi metninizi eklemek için tıklayın. İçeriğinizi eklemek ve yazı tipini değiştirmek için “Metni Düzenle”ye tıklayın veya buraya çift tıklayın. Bu alanı sayfanın istediğiniz bir yerine sürükleyip bırakabilirsiniz."
    },
    {
      img:"c837a6_136f489b41d445c38ff79f772d719210~mv2.webp",
      icon: "FaCity",
      text1: "Bu, bir paragraf. Kendi metninizi eklemek için tıklayın. İçeriğinizi eklemek ve yazı tipini değiştirmek için “Metni Düzenle”ye tıklayın veya buraya çift tıklayın. Bu alanı sayfanın istediğiniz bir yerine sürükleyip bırakabilirsiniz.",
      text2: "Bu, bir paragraf. Kendi metninizi eklemek için tıklayın. İçeriğinizi eklemek ve yazı tipini değiştirmek için “Metni Düzenle”ye tıklayın veya buraya çift tıklayın. Bu alanı sayfanın istediğiniz bir yerine sürükleyip bırakabilirsiniz."
    },
    {
      img:"c837a6_136f489b41d445c38ff79f772d719210~mv2.webp",
      icon: "FaCity",
      text1: "Bu, bir paragraf. Kendi metninizi eklemek için tıklayın. İçeriğinizi eklemek ve yazı tipini değiştirmek için “Metni Düzenle”ye tıklayın veya buraya çift tıklayın. Bu alanı sayfanın istediğiniz bir yerine sürükleyip bırakabilirsiniz.",
      text2: "Bu, bir paragraf. Kendi metninizi eklemek için tıklayın. İçeriğinizi eklemek ve yazı tipini değiştirmek için “Metni Düzenle”ye tıklayın veya buraya çift tıklayın. Bu alanı sayfanın istediğiniz bir yerine sürükleyip bırakabilirsiniz."
    }

    
  ]

  return (
    <PageContainers >
      <div className='servicesComps'>
      <Heading text="Hizmetlerimiz" title="İhtiyaçlarınıza Yönelik Bir Dizi Hizmet Sunuyoruz" p="Bu, bir paragraf. Kendi metninizi eklemek için tıklayın. Kullanıcılara kendinizi tanıtın." />

        {
          servicesData.map((item, id)=>(
            <Services
            img={item.img}
            icon={item.icon}
            text1={item.text1}
            text2={item.text2}

          />
          ))
        }
        
    
    </div>
    </PageContainers>
  )
}
