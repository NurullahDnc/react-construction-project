import React, { useEffect } from 'react'
import ScrollReveal from 'scrollreveal';

const PageTitle = ({title}) => {

    useEffect(() => {
        ScrollReveal().reveal('h2', {
          duration: 2000,
          rotate: { x: 200, y: 200 }
    
        });
      }, []);

  return (
    <div className='hakkımızda'>
        <h2>
            {title}
        </h2>
    </div>
  )
}

export default PageTitle
