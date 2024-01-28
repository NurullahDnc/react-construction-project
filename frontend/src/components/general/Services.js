import React from 'react'


export default function Services({img, icon:Icon, title, text1, text2}) {
  return (
    <div className='services'>
        
        <div className='services-image'>
            <img className='services-image-img' src={img} />
        </div>

        <div className='services-text'>
            <Icon size="30px" />
            <h1>Ticari insaat</h1>
            <p>Bu, bir paragraf. Kendi metninizi eklemek için tıklayın. İçeriğinizi eklemek ve yazı tipini değiştirmek için “Metni Düzenle”ye tıklayın veya buraya çift tıklayın. Bu alanı sayfanın istediğiniz bir yerine sürükleyip bırakabilirsiniz.</p>
            <p>Bu, bir paragraf. Kendi metninizi eklemek için tıklayın. İçeriğinizi eklemek ve yazı tipini değiştirmek için “Metni Düzenle”ye tıklayın veya buraya çift tıklayın. Bu alanı sayfanın istediğiniz bir yerine sürükleyip bırakabilirsiniz.</p>

        </div>

    </div>
  )
}
