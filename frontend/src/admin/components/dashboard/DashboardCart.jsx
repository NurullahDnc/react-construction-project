import React from 'react'

const DashboardCart = ({title, length}) => {
  return (
    <div className='DashboardCart'>
        <span>{title} </span>
        <span>{length} </span>
    </div>
  )
}

export default DashboardCart
