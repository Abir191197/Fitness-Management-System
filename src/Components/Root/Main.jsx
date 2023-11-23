import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import './Main.css'



const Main = () => {
    return (
      <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
       
       
      </div>
    );
};

export default Main;