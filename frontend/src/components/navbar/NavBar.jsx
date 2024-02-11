import React, { useEffect, useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from 'react-router-dom';
import { MdDarkMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";


const NavBar = () => {
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  }


  useEffect(() => {
    // useEffect içinde body'ye sınıf ekleyip çıkarma işlemi
    document.body.classList.toggle('dark-mode', isDarkMode);
  }, [isDarkMode]);

  return (
    <div className={`navbarGenral ${isDarkMode ? "dark-mode" : ""}`}>
      <div className='navbars container'>  
        <nav className="navbar navbar-expand-lg">  
          <div className='navbars-left'>
            <NavLink className="navbars-left-items navbar-brand" to="/">Logo</NavLink>
          </div>
          <button 
            className="navbars-menu navbar-toggler" 
            type="button" 
            data-toggle="collapse" 
            data-target="#navbarSupportedContent" 
            aria-controls="navbarSupportedContent" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbars-menu-btn navbar-toggler-icon">
              <GiHamburgerMenu/>
            </span>
          </button>
          <div className="navbars-right collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbars-right-item navbar-nav ml-auto">
              <li className="navbars-right-item-items nav-item">
                <NavLink className="nav-link" to="/service">Hizmetler</NavLink>
              </li>
              <li className="navbars-right-item-items nav-item">
                <NavLink className="nav-link" to="/project">Projeler</NavLink>
              </li>
              <li className="navbars-right-item-items nav-item">
                <NavLink className="nav-link" to="/about">Hakkımızda</NavLink>
              </li>
              <li className="navbars-right-item-items nav-item">
                <NavLink className="nav-link" to="/career">Kariyer</NavLink>
              </li>
              <li className="navbars-right-item-items nav-item">
                <NavLink className="nav-link" to="/contact">İletisim</NavLink>
              </li>
              <li className="navbars-right-item-items nav-item">
                <NavLink className="nav-link" to="/admin/login">Admin</NavLink>
              </li>
              <li className={`  nav-item ${isDarkMode ? "dark-mode" : ""}`}>
                <NavLink style={{color: "black"}} onClick={toggleDarkMode} className="nav-link">
                  {
                    isDarkMode? <MdDarkMode size={28} />: <MdOutlineDarkMode size={28} />
                  }
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
