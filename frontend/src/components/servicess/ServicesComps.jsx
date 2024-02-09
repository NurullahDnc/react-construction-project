import React from 'react'
import Heading from '../general/Heading'
import Services from '../general/ServicesProduct';
 import PageContainers from '../../Containers/PageContainers'
import PageTitle from '../general/PageTitle';
import { FaHome } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { FaBuilding } from "react-icons/fa";
import { FaHardHat } from "react-icons/fa";
import { HiHomeModern } from "react-icons/hi2";
import { GiBulldozer } from "react-icons/gi";



export default function ServicesComps() {

  const servicesData = [
    {
      id:"1",
      img:"c837a6_136f489b41d445c38ff79f772d719210~mv2.webp",
      icon: FaBuilding,
      title: "Ticari insaat",
      text1: "Bu, bir paragraf. Kendi metninizi eklemek için tıklayın. İçeriğinizi eklemek ve yazı tipini değiştirmek için “Metni Düzenle”ye tıklayın veya buraya çift tıklayın. Bu alanı sayfanın istediğiniz bir yerine sürükleyip bırakabilirsiniz.",
      text2: "Bu, bir paragraf. Kendi metninizi eklemek için tıklayın. İçeriğinizi eklemek ve yazı tipini değiştirmek için “Metni Düzenle”ye tıklayın veya buraya çift tıklayın. Bu alanı sayfanın istediğiniz bir yerine sürükleyip bırakabilirsiniz."
    },
    {
      id:"2",
      img:"c837a6_7e9b1e4c7d834bde8aaefc3b04269ad4~mv2.webp",
      icon: FaHome,
      title: "Konut İnşaatı",
      text1: "Bu, bir paragraf. Kendi metninizi eklemek için tıklayın. İçeriğinizi eklemek ve yazı tipini değiştirmek için “Metni Düzenle”ye tıklayın veya buraya çift tıklayın. Bu alanı sayfanın istediğiniz bir yerine sürükleyip bırakabilirsiniz.",
      text2: "Bu, bir paragraf. Kendi metninizi eklemek için tıklayın. İçeriğinizi eklemek ve yazı tipini değiştirmek için “Metni Düzenle”ye tıklayın veya buraya çift tıklayın. Bu alanı sayfanın istediğiniz bir yerine sürükleyip bırakabilirsiniz."
    },
    {
      id:"3",
      img:"https://static.wixstatic.com/media/c837a6_e02e4a7aa8d445f585c434ed55b60df8~mv2.jpg/v1/fill/w_991,h_878,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_e02e4a7aa8d445f585c434ed55b60df8~mv2.jpg",
      icon: GiNotebook,
      title: "İnşaat Öncesi Planlama",
      text1: "Bu, bir paragraf. Kendi metninizi eklemek için tıklayın. İçeriğinizi eklemek ve yazı tipini değiştirmek için “Metni Düzenle”ye tıklayın veya buraya çift tıklayın. Bu alanı sayfanın istediğiniz bir yerine sürükleyip bırakabilirsiniz.",
      text2: "Bu, bir paragraf. Kendi metninizi eklemek için tıklayın. İçeriğinizi eklemek ve yazı tipini değiştirmek için “Metni Düzenle”ye tıklayın veya buraya çift tıklayın. Bu alanı sayfanın istediğiniz bir yerine sürükleyip bırakabilirsiniz."
    },
    {
      id:"4",
      img:"c837a6_8abb4ef5216643d59e06aef027a9c7d1~mv2.webp",
      icon: HiHomeModern,
      title: "Özel Projeler",
      text1: "Bu, bir paragraf. Kendi metninizi eklemek için tıklayın. İçeriğinizi eklemek ve yazı tipini değiştirmek için “Metni Düzenle”ye tıklayın veya buraya çift tıklayın. Bu alanı sayfanın istediğiniz bir yerine sürükleyip bırakabilirsiniz.",
      text2: "Bu, bir paragraf. Kendi metninizi eklemek için tıklayın. İçeriğinizi eklemek ve yazı tipini değiştirmek için “Metni Düzenle”ye tıklayın veya buraya çift tıklayın. Bu alanı sayfanın istediğiniz bir yerine sürükleyip bırakabilirsiniz."
    },
    {
      id:"5",
      img:"c837a6_136f489b41d445c38ff79f772d719210~mv2.webp",
      icon: FaHardHat,
      title: "Şantiye Yönetimi",
      text1: "Bu, bir paragraf. Kendi metninizi eklemek için tıklayın. İçeriğinizi eklemek ve yazı tipini değiştirmek için “Metni Düzenle”ye tıklayın veya buraya çift tıklayın. Bu alanı sayfanın istediğiniz bir yerine sürükleyip bırakabilirsiniz.",
      text2: "Bu, bir paragraf. Kendi metninizi eklemek için tıklayın. İçeriğinizi eklemek ve yazı tipini değiştirmek için “Metni Düzenle”ye tıklayın veya buraya çift tıklayın. Bu alanı sayfanın istediğiniz bir yerine sürükleyip bırakabilirsiniz."
    },
    {
      id:"6",
      img:"c837a6_136f489b41d445c38ff79f772d719210~mv2.webp",
      icon: GiBulldozer,
      title: "Alt Yapı İnşaatı",
      text1: "Bu, bir paragraf. Kendi metninizi eklemek için tıklayın. İçeriğinizi eklemek ve yazı tipini değiştirmek için “Metni Düzenle”ye tıklayın veya buraya çift tıklayın. Bu alanı sayfanın istediğiniz bir yerine sürükleyip bırakabilirsiniz.",
      text2: "Bu, bir paragraf. Kendi metninizi eklemek için tıklayın. İçeriğinizi eklemek ve yazı tipini değiştirmek için “Metni Düzenle”ye tıklayın veya buraya çift tıklayın. Bu alanı sayfanın istediğiniz bir yerine sürükleyip bırakabilirsiniz."
    }
     
     
  ]

  return (
    <PageContainers >
      <div className='servicesComps'>
      <PageTitle title="Hizmetlerimiz" />

      <Heading  title="İhtiyaçlarınıza Yönelik Bir Dizi Hizmet Sunuyoruz" p="Bu, bir paragraf. Kendi metninizi eklemek için tıklayın. Kullanıcılara kendinizi tanıtın." />

        {
          servicesData.map((item, id)=>(
            <Services
            img={item.img}
            icon={item.icon} 
            title={item.title}
            text1={item.text1}
            text2={item.text2}

          />
          ))
        }
        
    
    </div>
    </PageContainers>
  )
}
