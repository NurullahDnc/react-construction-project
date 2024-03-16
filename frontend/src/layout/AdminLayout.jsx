// components/layout/Main.js
import React, { Children } from 'react';
 

const AdminLayout = ({children}) => {
    return (
        <div>
           <main> {children} </main>
        </div>
    );
}

export default AdminLayout;
