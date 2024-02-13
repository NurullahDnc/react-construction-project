// components/layout/Layout.js
import React from 'react';
import NavBar from '../navbar/NavBar';
import Footer from '../footer/Footer';
import Home from '../../page/Home';
import ServicesPage from '../../page/ServicesPage';
import Project from '../../page/Project';
import About from '../../page/About';
import Career from '../../page/Career';
import Contact from '../../page/Contact';
import Detail from '../../page/Detail';
import { Route, Routes } from 'react-router-dom';

const MainLayout = () => {
  return (
    <>
      <NavBar />
      <main>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="service" element={<ServicesPage />} />
          <Route path="/project" element={<Project />} />
          <Route path="/about" element={<About />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="*" element={<div className="pagenotFound">Sayfa bulunmadı</div>} />
        </Routes>

      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
