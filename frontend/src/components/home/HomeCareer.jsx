import React, { useEffect } from 'react'
import Heading from '../general/Heading'
import Button from '../general/Button'
import CareerProduct from '../general/CareerProduct'
import { useDispatch, useSelector } from 'react-redux'
import { getCareer } from '../../redux/CareerSlice'

export default function HomeCareer() {


  const dispacth = useDispatch();
  const {career} = useSelector((state)=> state.career)
 
  useEffect(()=>{
    dispacth(getCareer())
  },[dispacth])

  return (
    
      <div className='HomeCareer'  >
        <div className='HomeCareer-ServicesText'>
          <Heading text="Başarının Bir Parçası Olun " title="Kariyer Fırsatları Sizi Bekliyor"  />
          <Button text="daha fazla" url={"/service"} />

        </div>
        <div>

          <div className='career'>
            {
              career.map((item, i)=>(
                <CareerProduct key={i} title={item.title} text={item.text} buttonText={item.buttonText} url={item.url} />
              ))
            }
        </div>
        </div>

        
      </div>

      

 
      
   )
}
