import React, { useEffect } from 'react'
import Heading from '../general/Heading'
import Services from '../general/ServicesProduct';
 import PageContainers from '../../Containers/PageContainers'
import PageTitle from '../general/PageTitle';
import { FaHome } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { FaBuilding } from "react-icons/fa";
import { FaHardHat } from "react-icons/fa";
import { HiHomeModern } from "react-icons/hi2";
import { GiBulldozer } from "react-icons/gi";
import { useDispatch, useSelector } from 'react-redux';
import { getService } from '../../redux/ServiceSlice';



export default function ServicesComps() {


  const icons = {
    FaHome: FaHome,
    GiNotebook: GiNotebook,
    FaBuilding: FaBuilding,
    FaHardHat: FaHardHat,
    HiHomeModern: HiHomeModern,
    GiBulldozer: GiBulldozer,
  };
  
  const dispacth = useDispatch();
  const {service} = useSelector((state)=> state.service)

  console.log("service", service);

  useEffect(()=>{
    dispacth(getService())
  },[dispacth])

  return (
    <PageContainers >
      <div className='servicesComps'>
      <PageTitle title="Hizmetlerimiz" />

      <Heading  title="İhtiyaçlarınıza Yönelik Hizmet Sunuyoruz" p="Bu, bir paragraf. Kendi metninizi eklemek için tıklayın. Kullanıcılara kendinizi tanıtın." />

        {
          service.map((item, id)=>(
            <Services
            img={item.img}
            icon={icons[item.icon]} 
            title={item.title}
            text1={item.textone}
            text2={item.texttwo}
            
          />
          ))
        }
        
    
    </div>
    </PageContainers>
  )
}
