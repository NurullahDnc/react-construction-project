import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <div className='navbars container fixed-top'>  
      <nav className="navbar navbar-expand-lg sticky-top">  
        <div className='navbars-left'>
          <NavLink className="navbars-left-items navbar-brand" to="/">Logo</NavLink>
        </div>
        <button className=" navbars-menu navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbars-menu-btn navbar-toggler-icon"></span>
        </button>
        <div className="navbars-right collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbars-right-item navbar-nav ml-auto">
           
            <li className="navbars-right-item-items nav-item">
              <NavLink className="nav-link" to="/services">Hizmetler</NavLink>
            </li>
            <li className="navbars-right-item-items nav-item">
              <NavLink className="nav-link" to="#">Projeler</NavLink>
            </li>
            <li className="navbars-right-item-items nav-item">
              <NavLink className="nav-link" to="#">Hakkımızda</NavLink>
            </li>
            <li className="navbars-right-item-items nav-item">
              <NavLink className="nav-link" to="#">Kariyer</NavLink>
            </li>
            <li className="navbars-right-item-items nav-item">
              <NavLink className="nav-link" to="#">İletisim</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
