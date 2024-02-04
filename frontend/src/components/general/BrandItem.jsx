import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

export default function BrandItem({ img, index }) {

  useEffect(() => {
    ScrollReveal().reveal(`.brandItem`, {
      interval: 500,
      duration: 1000,
      rotate: { x: 20, y: 20 }
    });
  }, [index]);

  return (
    <div className={`brandItem brandItem-${index}`}>
      <img className='brandItem-img' src={img} alt='' />
    </div>
  );
}
