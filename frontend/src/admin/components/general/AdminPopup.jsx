import React, { useState } from 'react'
import Input from './Input'
import AdminButton from './AdminButton'

const AdminPopup = ({placeholder, ButtonText}) => {

    const [isOpen, setIsOpen] = useState(false);


    const handleCreateClose = ()=>{
        setIsOpen(!isOpen)
      }
      
    const handleCreateOpen = ()=>{
        
    setIsOpen(!isOpen)
    }

  return (
    <div>
            {
        isOpen ? (
          <div className='adminPopup'  >
            <div  className='adminPopup-container' >
              <Input placeholder={placeholder} />
  
              <Input type={"file"} placeholder={"ad"} />
  
              <AdminButton text={"adadd"}/>
              <div onClick={()=> handleCreateClose() } className='adminPopup-container-close'>
  
              X
            </div>
            </div>
          
          
          </div>
  
          ) : ""
      }
      <AdminButton text={ButtonText} onClicks={()=> handleCreateOpen()} />
    </div>
  )
}

export default AdminPopup
