import React, { useState } from 'react'
import Button from '../general/Button'

const Popup = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleAccepts =()=>{
        setIsOpen(!isOpen);
    }

    const handleReject =()=>{
        setIsOpen(!isOpen);

    }

    

  return (
   <div>
    {
        isOpen? "" : <div className='Popup'>

        <div className='Popup-container'>
            <div className='Popup-container-text'> sitesinin ziyaret edilebilmesini ve özelliklerinin kullanılmasını sağlar. Performans çerezleri, kullanıcıların sitede gezinme alışkanlıklarını inceleyerek internet sitesinin performansını iyileştirir. İşlevsellik çerezleri, kullanıcıların sitedeki seçimlerini tanıyarak sitede gezinmeyi kolaylaştırır. Pazarlama çerezleri, promosyon ve sosyal medya bilgilerini kullanarak uygun kampanyaları haber verir.Çerez politikamızı inceleyin.</div>

            <div className='Popup-container-buttons'> 
                <button onClick={handleReject} >Tümünü Redet et</button>
                <button onClick={handleAccepts} >Kabul et</button>
            </div>
            
        </div>
     
    </div>
    }
   </div>
  )
}

export default Popup
