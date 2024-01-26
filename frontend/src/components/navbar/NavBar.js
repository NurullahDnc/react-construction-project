import React from 'react'

export default function NavBar() {
  return (
    <div className='container py-3'>
      <nav className="navbar navbar-expand-lg navbar-light bg-danger">
       <div className='mr-auto'>
       <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler  " type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
       </div>

        <div className="collapse navbar-collapse ml-auto" id="navbarSupportedContent">
        <div className='ml-auto border border-danger '>
          <ul className="navbar-nav  ">
              <li className="nav-item ">
                <a className="nav-link" href="#">Hizmetler  </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Projeler</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Hakkımızda </a>
              </li><li className="nav-item">
                <a className="nav-link" href="#">Kariyer</a>
              </li><li className="nav-item">
                <a className="nav-link" href="#">İletisim</a>
              </li><li className="nav-item">
                <a className="nav-link" href="#">Hemen Ara</a>
              </li>
              
            </ul>
        </div>
           
        </div>
      </nav>



     

    </div>
  )
}
