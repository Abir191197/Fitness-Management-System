import React from 'react';
import Nav from "../Nutritionist_Panel/Nav/Nav";
import { Outlet } from 'react-router-dom';

const Root_Nutritionist = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
        </div>
    );
};

export default Root_Nutritionist;