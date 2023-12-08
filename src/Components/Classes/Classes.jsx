import React from 'react';

import Nav from '../Customers/Nav/Nav';
import { Outlet } from 'react-router-dom';



const Classes = () => {
    return (
        <div className=''>
            <Nav></Nav>
            
            <Outlet></Outlet>
           
          

            

        </div>
    );
};

export default Classes;