import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Navbar />
            <Outlet />
        </div>
    );
};

export default Root;