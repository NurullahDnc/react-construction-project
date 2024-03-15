import React, { useEffect } from 'react'
import Heading from '../general/Heading'
import CareerProduct from '../general/CareerProduct'
import HomeCareer from '../home/HomeCareer'
import PageTitle from '../general/PageTitle'
import { useDispatch, useSelector } from 'react-redux'
import { getCareer } from '../../redux/CareerSlice'
 
export default function CareerComps() {


  // HomeCareer(careerData)
  const dispacth = useDispatch();
  const { career} = useSelector((state) => state.career)

  useEffect(() => {
    dispacth(getCareer())
  }, [dispacth])

  return (
    <div >
      <PageTitle title={"Kariyerimiz"} />
      <Heading title="Başarının Bir Parcası Olun" p="Kariyer Fırsatları Sizi Bekliyor" />

      <div className='Careercomps' >
         {
          career.map((item, i)=>(
            <div key={i} >
              <CareerProduct title={item.title} text={item.text} buttonText={item.buttonText} url={item.url} />

            </div>            
          ))
         }
      </div>

    </div>
  )
}
