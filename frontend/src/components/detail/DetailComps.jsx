import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router'
import ScrollReveal from 'scrollreveal';
import { getProject } from '../../redux/ProjectSlice';

export default function DetailComps() {
 
  const {project} = useSelector((state)=> state.project)
  const dispacth = useDispatch();

  useEffect(()=>{
    dispacth(getProject());
  },[dispacth])

  //ürl her zaman str gelir
  const {id} = useParams();

  const newData = project.find((product)=>( product.id == id ))

  useEffect(()=>{
    ScrollReveal().reveal(".DetailComps-left",{

      distance: "150px",
      origin: "left",
      duration: 2000
    })

    ScrollReveal().reveal(".DetailComps-right",{
      duration: 2000,
      origin: "right",
      distance: "150px",
     })

  },[])


  return (
    <div className='DetailComps'>

      <div className='DetailComps-left'>
        <img className='DetailComps-left-img' src={`/${newData.img}`} alt="yüklenmedi" />
      </div>

      <div className='DetailComps-right' >
        <h2 className='DetailComps-title'>{newData.title} </h2>
        <p>{newData.text} </p>
        {/* <p>{newData.text2} </p> */}

      </div>
     </div>
  )
}

//find    = kosulu saglayan ilk oge dondurur, bir tane oge dondurur.
//filter  = kosulu saglayan tüm ogeleri dondurur.
