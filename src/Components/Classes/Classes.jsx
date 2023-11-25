import React from 'react';

import Nav from '../Customers/Nav/Nav';
import { Outlet } from 'react-router-dom';
import Trainer from '../Trainer/Trainer';
import Blog from '../Customers/Blog/Blog';


const Classes = () => {
    return (
        <div>
            <Nav></Nav>
            
            <Outlet></Outlet>
           
          

            

        </div>
    );
};

export default Classes;