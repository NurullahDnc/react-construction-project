import React from 'react'
import Heading from '../general/Heading'
import FooterItem from '../general/FooterItem'

export default function AboutComps() {

  const aboutData = [
    {
      id: "1",
      title: "İlişkiler",
      textone: "Bu, bir paragraf. Kendi metninizi eklemek için tıklayın. İçeriğinizi eklemek ve yazı tipini değiştirmek için “Metni Düzenle”ye tıklayın veya buraya çift tıklayın. Burası, bir hikâye anlatmak için harika bir yer."
    },
    {
      id: "2",
      title: "Deneyim",
      textone: "Bu, bir paragraf. Kendi metninizi eklemek için tıklayın. İçeriğinizi eklemek ve yazı tipini değiştirmek için “Metni Düzenle”ye tıklayın veya buraya çift tıklayın. Burası, bir hikâye anlatmak için harika bir yer."
    },
    {
      id: "3",
      title: "Sorumluluk",
      textone: "Bu, bir paragraf. Kendi metninizi eklemek için tıklayın. İçeriğinizi eklemek ve yazı tipini değiştirmek için “Metni Düzenle”ye tıklayın veya buraya çift tıklayın. Burası, bir hikâye anlatmak için harika bir yer."
    }
  ]

  
  const aboutDescription = [
    {
      id: "1",
      title: "Masterson ve Barbaros İnşaat Ortakları",
      textone: "Bu, bir paragraf. Kendi metninizi eklemek için tıklayın. İçeriğinizi eklemek ve yazı tipini değiştirmek için “Metni Düzenle”ye tıklayın veya buraya çift tıklayın. Burası, bir hikâye anlatmak için harika bir yer Bu, bir paragraf. Kendi metninizi eklemek için tıklayın. İçeriğinizi eklemek ve yazı tipini değiştirmek için “Metni Düzenle”ye tıklayın veya buraya çift tıklayın. Burası, bir hikâye anlatmak için harika bir yer.",
      texttwo: "Bu, bir paragraf. Kendi metninizi eklemek için tıklayın. İçeriğinizi eklemek ve yazı tipini değiştirmek için “Metni Düzenle”ye tıklayın veya buraya çift tıklayın. Burası, bir hikâye anlatmak için harika bir yer Bu, bir paragraf. Kendi metninizi eklemek için tıklayın. İçeriğinizi eklemek ve yazı tipini değiştirmek için “Metni Düzenle”ye tıklayın veya buraya çift tıklayın. Burası, bir hikâye anlatmak için harika bir yer.",
            
    } 
  ]
  return (
    <div>
      <Heading text="Hakkımızda" title="Halk İçin İnşa Ediyoruz" />

      <div className='AboutComps'>
        <div className='AboutComps-img'>
          <img className='ProjectProduct-img-imgs' src="c837a6_8abb4ef5216643d59e06aef027a9c7d1~mv2.webp" alt="" />
        </div>
        <div className='AboutComps-container' >
          <div className='AboutComps-container-right'>
            {
              aboutDescription.map(item =>(
                <FooterItem
                  title={item.title}
                  textone={item.textone}
                  texttwo={item.texttwo}
 
                 />
              ))
            }

          </div>
          <div className='AboutComps-container-left'>

           {
              aboutData.map(item => (
                <FooterItem
                  key={item.id}
                  title={item.title}
                  textone={item.textone}
                />
              ))
            }


          </div>
        </div>

      </div>
    </div>
  )
}



