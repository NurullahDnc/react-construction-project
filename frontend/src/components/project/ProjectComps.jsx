import React, { useEffect, useState } from 'react'
import Heading from '../general/Heading'
import ProjectProduct from '../general/ProjectProduct'
import Category from './Category'
import ScrollReveal from 'scrollreveal';
import { useDispatch, useSelector } from 'react-redux';
import { getCategory, getProject } from '../../redux/ProjectSlice';
import PageTitle from '../general/PageTitle';

export default function ProjectComps() {


  const dispacth = useDispatch();

  const [selectedProject, setSelectedProject] = useState("Tümü");
  const { project, loading, error } = useSelector((state) => state.project) 
  const {category} = useSelector((state)=> state.category)

  console.log(project, "prosjec");

  useEffect(() => {
    dispacth(getProject())
    dispacth(getCategory())
  }, [dispacth])
      
  useEffect(() => {
    ScrollReveal().reveal('.ProjectComps-container-product', {
      interval: 500,
      duration: 1000,
      rotate: { x: 20, y: 20 }

    });
  }, []);

  console.log(error);
  //tıklanan kategori alıyor,  usestate at
  const handleSubmit = (item) => {
    setSelectedProject(item.name)
    console.log("Seçili Proje:", selectedProject);

  }

  // projeleri kategoriye gore filter yap degiskene at, selectedProject Tümü esit ise productdata don degil ise filter yap
  const filterProduct = selectedProject === "Tümü" ? project : project.filter(item => item.category === selectedProject) 

  return (
    <div className='ProjectComps headline'>
      <PageTitle title="Projelerimiz" />

      <Heading   title="Modern Tasarımlar, Güvenilir Projeler" />
      <div className='ProjectComps-category' >
        {
          category.map((item, i) => (
            <div key={i} onClick={() => handleSubmit(item)}>
              <Category
                key={i}
                cate={item.name}
                url={item.url}
              />
            </div>
          ))
        }
      </div>

      {
        filterProduct.length == 0 ?
          <div className='ProjectComps-productNull'>Bu kategoride henüz projemiz yok, ancak gelecekte düşünüyoruz. </div> :
          <div className='ProjectComps-container'>
            {filterProduct.map((item, i) => (
              <div className='ProjectComps-container-product' key={i}>
                <ProjectProduct id={item.id} img={item.img} text={item.title} />
              </div>
            ))}

          </div>
      }

    </div>
  )
}


