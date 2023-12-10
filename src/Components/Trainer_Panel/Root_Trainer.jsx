import React from 'react';
import NavTrainer from './NavTrainer';
import { Outlet } from 'react-router-dom';

const Root_Trainer = () => {
    return (
        <div >
            <NavTrainer></NavTrainer>
            <Outlet></Outlet>
        </div>
    );
};

export default Root_Trainer;