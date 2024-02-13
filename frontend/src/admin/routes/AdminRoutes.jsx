// AdminRoutes.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminMenu from '../components/menu/AdminMenu';
import AdminProject from '../page/AdminProject';

import Services from '../components/servicess/Services';
import ProjectsCreate from '../components/project/ProjectsUpdate';
import AdminDashboard from '../page/AdminDashboard';
import AdminAbout from '../page/AdminAbout';
import Message from '../page/Message';
import Register from '../auth/register';
import ServiceUpdate from '../components/servicess/ServiceUpdate';
import AdminCareer from '../page/AdminCareer';
import CareerUpdate from '../components/career/CareerUpdate';
import AboutUpdate from '../components/about/AboutUpdate';
  

const AdminRoutes = () => {
  return (
    <div className='AdminRoutes'>
        <div className='AdminRoutes-left' >
            <AdminMenu />

        </div>
        <div className='AdminRoutes-right' >
        <Routes>
                <Route path="/dashboard" element={<AdminDashboard />} />
                
                <Route path="/services" element={<Services />} />
                <Route path="/services/Update/:id" element={<ServiceUpdate />} />

                <Route path="/projects" element={<AdminProject />} />
                <Route path="/product/update/:id" element={<ProjectsCreate />} />

                <Route path="/about" element={<AdminAbout />} />
                <Route path="/about/update/:id" element={<AboutUpdate />} />


                <Route path="/career" element={<AdminCareer />} />
                <Route path="/career/Update/:id" element={<CareerUpdate />} />


                <Route path="/message" element={<Message />} />
                <Route path="/user" element={<Register />} />


                {/* <Route path="*" element={<div className='pagenotFound' >sayfa bulunamadı</div>} /> */}


            </Routes>
       </div>
    </div>
  );
};

export default AdminRoutes;
