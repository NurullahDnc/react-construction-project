// AdminRoutes.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../page/Dashboard';
import AdminMenu from '../components/menu/AdminMenu';
import AdminProject from '../page/AdminProject';
import AdminProjectCreate from '../page/AdminProjectCreate';
 

const AdminRoutes = () => {
  return (
    <div className='AdminRoutes'>
        <div className='AdminRoutes-left' >
            <AdminMenu />

        </div>
        <div className='AdminRoutes-right' >
        <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/services" element={<AdminProject />} />
                <Route path="/projects" element={<AdminProject />} />
                <Route path="/projectCreate" element={<AdminProjectCreate />} />
                <Route path="/about" element={<AdminProject />} />
                <Route path="/career" element={<AdminProject />} />
                <Route path="*" element={<div>sayfa bulunamadı</div>} />


            </Routes>
       </div>
    </div>
  );
};

export default AdminRoutes;
