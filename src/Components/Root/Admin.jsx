import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminNav from "../Admin/AdminNav/AdminNav";

const Admin = () => {
    return (
        <div>
            <AdminNav></AdminNav>
            <Outlet></Outlet>
        </div>
    );
};

export default Admin;