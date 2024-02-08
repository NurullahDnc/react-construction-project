import React from 'react'
import Heading from '../general/Heading'
import Services from '../general/ServicesProduct';
import { FaCity } from "react-icons/fa6";
import PageContainers from '../../Containers/PageContainers'
import PageTitle from '../general/PageTitle';



export default function ServicesComps() {

  const servicesData = [
    {
      img:"c837a6_136f489b41d445c38ff79f772d719210~mv2.webp",
      icon: FaCity,
      title: "Ticari insaat",
      text1: "Bu, bir paragraf. Kendi metninizi eklemek için tıklayın. İçeriğinizi eklemek ve yazı tipini değiştirmek için “Metni Düzenle”ye tıklayın veya buraya çift tıklayın. Bu alanı sayfanın istediğiniz bir yerine sürükleyip bırakabilirsiniz.",
      text2: "Bu, bir paragraf. Kendi metninizi eklemek için tıklayın. İçeriğinizi eklemek ve yazı tipini değiştirmek için “Metni Düzenle”ye tıklayın veya buraya çift tıklayın. Bu alanı sayfanın istediğiniz bir yerine sürükleyip bırakabilirsiniz."
    },
    {
      img:"c837a6_7e9b1e4c7d834bde8aaefc3b04269ad4~mv2.webp",
      icon: FaCity,
      title: "Konut İnşaatı",
      text1: "Bu, bir paragraf. Kendi metninizi eklemek için tıklayın. İçeriğinizi eklemek ve yazı tipini değiştirmek için “Metni Düzenle”ye tıklayın veya buraya çift tıklayın. Bu alanı sayfanın istediğiniz bir yerine sürükleyip bırakabilirsiniz.",
      text2: "Bu, bir paragraf. Kendi metninizi eklemek için tıklayın. İçeriğinizi eklemek ve yazı tipini değiştirmek için “Metni Düzenle”ye tıklayın veya buraya çift tıklayın. Bu alanı sayfanın istediğiniz bir yerine sürükleyip bırakabilirsiniz."
    },
    {
      img:"https://static.wixstatic.com/media/c837a6_e02e4a7aa8d445f585c434ed55b60df8~mv2.jpg/v1/fill/w_991,h_878,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_e02e4a7aa8d445f585c434ed55b60df8~mv2.jpg",
      icon: FaCity,
      title: "İnşaat Öncesi Planlama",
      text1: "Bu, bir paragraf. Kendi metninizi eklemek için tıklayın. İçeriğinizi eklemek ve yazı tipini değiştirmek için “Metni Düzenle”ye tıklayın veya buraya çift tıklayın. Bu alanı sayfanın istediğiniz bir yerine sürükleyip bırakabilirsiniz.",
      text2: "Bu, bir paragraf. Kendi metninizi eklemek için tıklayın. İçeriğinizi eklemek ve yazı tipini değiştirmek için “Metni Düzenle”ye tıklayın veya buraya çift tıklayın. Bu alanı sayfanın istediğiniz bir yerine sürükleyip bırakabilirsiniz."
    },
    {
      img:"c837a6_8abb4ef5216643d59e06aef027a9c7d1~mv2.webp",
      icon: FaCity,
      title: "Özel Projeler",
      text1: "Bu, bir paragraf. Kendi metninizi eklemek için tıklayın. İçeriğinizi eklemek ve yazı tipini değiştirmek için “Metni Düzenle”ye tıklayın veya buraya çift tıklayın. Bu alanı sayfanın istediğiniz bir yerine sürükleyip bırakabilirsiniz.",
      text2: "Bu, bir paragraf. Kendi metninizi eklemek için tıklayın. İçeriğinizi eklemek ve yazı tipini değiştirmek için “Metni Düzenle”ye tıklayın veya buraya çift tıklayın. Bu alanı sayfanın istediğiniz bir yerine sürükleyip bırakabilirsiniz."
    },
    {
      img:"c837a6_136f489b41d445c38ff79f772d719210~mv2.webp",
      icon: FaCity,
      title: "Şantiye Yönetimi",
      text1: "Bu, bir paragraf. Kendi metninizi eklemek için tıklayın. İçeriğinizi eklemek ve yazı tipini değiştirmek için “Metni Düzenle”ye tıklayın veya buraya çift tıklayın. Bu alanı sayfanın istediğiniz bir yerine sürükleyip bırakabilirsiniz.",
      text2: "Bu, bir paragraf. Kendi metninizi eklemek için tıklayın. İçeriğinizi eklemek ve yazı tipini değiştirmek için “Metni Düzenle”ye tıklayın veya buraya çift tıklayın. Bu alanı sayfanın istediğiniz bir yerine sürükleyip bırakabilirsiniz."
    },
    {
      img:"https://static.wixstatic.com/media/c837a6_e02e4a7aa8d445f585c434ed55b60df8~mv2.jpg/v1/fill/w_991,h_878,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_e02e4a7aa8d445f585c434ed55b60df8~mv2.jpg",
      icon: FaCity,
      title: "Şantiye Yönetimi",
      text1: "Bu, bir paragraf. Kendi metninizi eklemek için tıklayın. İçeriğinizi eklemek ve yazı tipini değiştirmek için “Metni Düzenle”ye tıklayın veya buraya çift tıklayın. Bu alanı sayfanın istediğiniz bir yerine sürükleyip bırakabilirsiniz.",
      text2: "Bu, bir paragraf. Kendi metninizi eklemek için tıklayın. İçeriğinizi eklemek ve yazı tipini değiştirmek için “Metni Düzenle”ye tıklayın veya buraya çift tıklayın. Bu alanı sayfanın istediğiniz bir yerine sürükleyip bırakabilirsiniz."
    },
    {
      img:"c837a6_136f489b41d445c38ff79f772d719210~mv2.webp",
      icon: FaCity,
      title: "Şantiye Yönetimi",
      text1: "Bu, bir paragraf. Kendi metninizi eklemek için tıklayın. İçeriğinizi eklemek ve yazı tipini değiştirmek için “Metni Düzenle”ye tıklayın veya buraya çift tıklayın. Bu alanı sayfanın istediğiniz bir yerine sürükleyip bırakabilirsiniz.",
      text2: "Bu, bir paragraf. Kendi metninizi eklemek için tıklayın. İçeriğinizi eklemek ve yazı tipini değiştirmek için “Metni Düzenle”ye tıklayın veya buraya çift tıklayın. Bu alanı sayfanın istediğiniz bir yerine sürükleyip bırakabilirsiniz."
    },
    {
      img:"https://static.wixstatic.com/media/c837a6_e02e4a7aa8d445f585c434ed55b60df8~mv2.jpg/v1/fill/w_991,h_878,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_e02e4a7aa8d445f585c434ed55b60df8~mv2.jpg",
      icon: FaCity,
      title: "Şantiye Yönetimi",
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
