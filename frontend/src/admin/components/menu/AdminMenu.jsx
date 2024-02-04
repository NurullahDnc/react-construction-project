import React from 'react'
import { Link } from 'react-router-dom'
import { FaCity } from "react-icons/fa6";

const AdminMenu = () => {

    const navLinks = [
        {
            id: 1,
            text: 'Dashboard',
            icon: FaCity,
            url: 'dashboard'
        },
        {
            id: 2,
            text: 'Hizmetler',
            icon: FaCity,
            url: 'services'
        },
        {
            id: 3,
            text: 'Projeler',
            icon: FaCity,
            url: 'projects'
        },
        {
            id: 4,
            text: 'hakkımızda',
            icon: FaCity,
            url: 'about'
        },
        {
            id: 5,
            text: 'Karier',
            icon: FaCity,
            url: 'career'
        }
]      

  return (
        <nav className='AdminMenu'>

            <ol className='AdminMenu-container'>

                {
                    navLinks.map(item => (
                        <li className='AdminMenu-container-item'>
                            {item.icon && <item.icon />}
                            <Link to={item.url}  >{item.text} </Link>
                        </li>
                    ))
                }


            </ol>
        </nav>
    )
}

export default AdminMenu
