// AdminRoutes.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminMenu from '../components/menu/AdminMenu';
import AdminProject from '../page/AdminProject';

import Services from '../components/servicess/Services';
import ProjectsCreate from '../components/project/ProjectsUpdate';
import Dashboard from '../page/Dashboard';
import About from '../page/About';
import Career from '../page/Career';
import Message from '../page/Message';
  

const AdminRoutes = () => {
  return (
    <div className='AdminRoutes'>
        <div className='AdminRoutes-left' >
            <AdminMenu />

        </div>
        <div className='AdminRoutes-right' >
        <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/services" element={<Services />} />
                <Route path="/projects" element={<AdminProject />} />
                <Route path="/productcreate/:id" element={<ProjectsCreate />} />

                <Route path="/about" element={<About />} />
                <Route path="/career" element={<Career />} />
                <Route path="/message" element={<Message />} />

                <Route path="*" element={<div>sayfa bulunamadı</div>} />


            </Routes>
       </div>
    </div>
  );
};

export default AdminRoutes;
