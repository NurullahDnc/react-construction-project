import React from 'react'
import Heading from '../general/Heading'
import FooterItem from '../general/FooterItem'
import PageTitle from '../general/PageTitle'

export default function AboutComps() {

  const aboutData = [
    {
      id: "1",
      title: "İlişkiler",
      textone: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi laboriosam quod, numquam sapiente ducimus voluptate eaque aut consequatur ab odit, molestias quia? Aut voluptatum aperiam aliquam numquam reprehenderit libero cupiditate.      "
    },
    {
      id: "2",
      title: "Deneyim",
      textone: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi laboriosam quod, numquam sapiente ducimus voluptate eaque aut consequatur ab odit, molestias quia? Aut voluptatum aperiam aliquam numquam reprehenderit libero cupiditate.      "
    },
    {
      id: "3",
      title: "Sorumluluk",
      textone: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi laboriosam quod, numquam sapiente ducimus voluptate eaque aut consequatur ab odit, molestias quia? Aut voluptatum aperiam aliquam numquam reprehenderit libero cupiditate.      "
    }
  ]

  
  const aboutDescription = [
    {
      id: "1",
      title: "Masterson ve Barbaros İnşaat Ortakları",
      textone: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi laboriosam quod, numquam sapiente ducimus voluptate eaque aut consequatur ab odit, molestias quia? Aut voluptatum aperiam aliquam numquam reprehenderit libero cupiditate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi laboriosam quod, numquam sapiente ducimus voluptate eaque aut consequatur ab odit, molestias quia? Aut voluptatum aperiam aliquam numquam reprehenderit libero cupiditate.      ",
      texttwo: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi laboriosam quod, numquam sapiente ducimus voluptate eaque aut consequatur ab odit, molestias quia? Aut voluptatum aperiam aliquam numquam reprehenderit libero cupiditate.      ",
            
    } 
  ]
  return (
    <div>
      <PageTitle title="Hakkımızda" />
      <Heading title="Halk İçin İnşa Ediyoruz" />

      <div className='AboutComps'>
        <div className='AboutComps-img'>
          <img className='ProjectProduct-img-imgs' src="hakkımdaimg.jpg" alt="" />
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



