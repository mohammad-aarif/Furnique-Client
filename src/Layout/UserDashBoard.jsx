import React from 'react';
import { Outlet } from 'react-router-dom';
import UserNav from '../Pages/User Pages/UserNav/UserNav';

const UserDashBoard = () => {
    return (
        <div className='py-20'>
            <UserNav />
            <Outlet />
        </div>
    );
};

export default UserDashBoard;