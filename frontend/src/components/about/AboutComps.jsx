import React from 'react'
import Heading from '../general/Heading'
import FooterItem from '../general/FooterItem'

export default function AboutComps() {
  return (
    <div>
      <Heading text="Hakkımızda" title="Halk İçin İnşa Ediyoruz" />

        <div className='AboutComps'>
            <div className='AboutComps-img'>
                <img className='ProjectProduct-img-imgs' src="c837a6_8abb4ef5216643d59e06aef027a9c7d1~mv2.webp" alt="" />
            </div>
            <div className='AboutComps-container' >
                <div className='AboutComps-container-right'>
                    <FooterItem 
                        title="Masterson ve Barbaros İnşaat Ortakları " 
                        textone="Bu, bir paragraf. Kendi metninizi eklemek için tıklayın. İçeriğinizi eklemek ve yazı tipini değiştirmek için “Metni Düzenle”ye tıklayın veya buraya çift tıklayın. Bu alanı sayfanın istediğiniz bir yerine sürükleyip bırakabilirsiniz. Burası, bir hikâye anlatmak ve kullanıcılarınıza kendinizi tanıtmak için harika bir yer." 
                        texttwo="Bu, bir paragraf. Kendi metninizi eklemek için tıklayın. İçeriğinizi eklemek ve yazı tipini değiştirmek için “Metni Düzenle”ye tıklayın veya buraya çift tıklayın. Bu alanı sayfanın istediğiniz bir yerine sürükleyip bırakabilirsiniz. Burası, bir hikâye anlatmak ve kullanıcılarınıza kendinizi tanıtmak için harika bir yer."
                        />
                    
                </div>
                <div className='AboutComps-container-left'>
                <FooterItem 
                    title="İlişkiler" 
                    textone="Bu, bir paragraf. Kendi metninizi eklemek için tıklayın. İçeriğinizi eklemek ve yazı tipini değiştirmek için “Metni Düzenle”ye tıklayın veya buraya çift tıklayın. Burası, bir hikâye anlatmak için harika bir yer." 
                 />

                <FooterItem 
                    title="Deneyim" 
                    textone="Bu, bir paragraf. Kendi metninizi eklemek için tıklayın. İçeriğinizi eklemek ve yazı tipini değiştirmek için “Metni Düzenle”ye tıklayın veya buraya çift tıklayın. Burası, bir hikâye anlatmak için harika bir yer." 
                 />

                <FooterItem 
                    title="Sorumluluk     " 
                    textone="Bu, bir paragraf. Kendi metninizi eklemek için tıklayın. İçeriğinizi eklemek ve yazı tipini değiştirmek için “Metni Düzenle”ye tıklayın veya buraya çift tıklayın. Burası, bir hikâye anlatmak için harika bir yer." 
                 />

                 

                </div>
            </div>

        </div>
    </div>
  )
}



