import React from 'react'
import Heading from '../general/Heading'
import Button from '../general/Button'
import CareerProduct from '../general/CareerProduct'

export default function HomeCareer() {

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

  return (
 
    
      <div className='HomeCareer'  >
        <div className='HomeCareer-ServicesText'>
          <Heading text="Hizmetlerimiz" title="İhtiyaçlarınıza Yönelik Bir Dizi Hizmet Sunuyoruz" p="Bu, bir paragraf. Kendi metninizi eklemek için buraya tıklayın. Kullanıcılara kendinizi tanıtın." />
          <Button text="daha fazla" url={"/service"} />

        </div>
        <div>

          <div className='career'>
            {
              careerData.map((item, i)=>(
                <CareerProduct key={i} title={item.title} text={item.text} buttonText={item.buttonText} url={item.url} />
              ))
            }
        </div>
        </div>

        
      </div>

      

 
      
   )
}
