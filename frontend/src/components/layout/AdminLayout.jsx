// components/layout/Main.js
import React, { Children } from 'react';
import Home from '../../page/Home';
import ServicesPage from '../../page/ServicesPage';
import Project from '../../page/Project';
import About from '../../page/About';
import Career from '../../page/Career';
import Contact from '../../page/Contact';
import Detail from '../../page/Detail';
import { Routes, Route } from 'react-router-dom';

const AdminLayout = ({children}) => {
    return (
        <div>
           <main> {children} </main>
        </div>
    );
}

export default AdminLayout;
