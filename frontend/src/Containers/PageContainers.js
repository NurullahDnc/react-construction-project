import React from 'react'

export default function PageContainers({children}) {
  return (
    /*sayfanın 12 de 10 alanını kaplatıyoruz, ortalıyoruz */
    <div style={{ width: "86%", margin: "auto", paddingTop:"6rem" }}>
      {children}
    </div>
  )
}