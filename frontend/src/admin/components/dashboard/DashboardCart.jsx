import React from 'react'

const DashboardCart = ({title, length}) => {
  return (
    <div className='DashboardCart'>
        <h4>{title} </h4>
        <span>{length} </span>
    </div>
  )
}

export default DashboardCart
