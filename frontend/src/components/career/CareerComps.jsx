import React from 'react'
import Heading from '../general/Heading'
import CareerProduct from '../general/CareerProduct'
import HomeCareer from '../home/HomeCareer'
import PageTitle from '../general/PageTitle'


export default function CareerComps() {

  const careerData = [
    {
      title: "İnşaat Planlama Mühendisis",
      text: "Bu, bir paragraf. Kendi metninizi eklemek için tıklayın. Burası, bir hikâye anlatmak ve kullanıcılarınıza kendinizi tanıtmak için harika bir yer.",
      buttonText: "Simdi Başvur",
      url: "/"
    },

    {
      title: "Resepsiyonist",
      text: "Bu, bir paragraf. Kendi metninizi eklemek için tıklayın. Burası, bir hikâye anlatmak ve kullanıcılarınıza kendinizi tanıtmak için harika bir yer.",
      buttonText: "Simdi Başvur",
      url: "/"

    },

    {
      title: "İnşaat Mühendisi - Kıdemli",
      text: "Bu, bir paragraf. Kendi metninizi eklemek için tıklayın. Burası, bir hikâye anlatmak ve kullanıcılarınıza kendinizi tanıtmak için harika bir yer.",
      buttonText: "Simdi Başvur",
      url: "/"

    },
    {
      title: "Şantiye Şefi - Deneyimli",
      text: "Bu, bir paragraf. Kendi metninizi eklemek için tıklayın. Burası, bir hikâye anlatmak ve kullanıcılarınıza kendinizi tanıtmak için harika bir yer.",
      buttonText: "Simdi Başvur",
      url: "/"

    },
    {
      title: "Şantiye Şefi - Deneyimli",
      text: "Bu, bir paragraf. Kendi metninizi eklemek için tıklayın. Burası, bir hikâye anlatmak ve kullanıcılarınıza kendinizi tanıtmak için harika bir yer.",
      buttonText: "Simdi Başvur",
      url: "/"

    }

  ]

  HomeCareer(careerData)

  return (
    <div >
      <PageTitle title={"Kariyerimiz"} />
      <Heading title="Başarının Bir Parcası Olun" p="Kariyer Fırsatları Sizi Bekliyor" />

      <div className='HomeCareercomps' >
         {
          careerData.map((item, i)=>(
            <div key={i} >
              <CareerProduct title={item.title} text={item.text} buttonText={item.buttonText} url={item.url} />

            </div>            
          ))
         }
      </div>

    </div>
  )
}
