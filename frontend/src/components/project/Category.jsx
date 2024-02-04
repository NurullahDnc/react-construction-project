import React from 'react'
import { NavLink } from 'react-router-dom'

const Category = ({cate, url}) => {

  return (
    <div className='categoryİtem'>

        <a className='categoryİtem-p' href={url}>{cate} </a>
    </div>
  )
}

export default Category

