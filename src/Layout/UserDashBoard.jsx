import React from 'react';
import { Outlet } from 'react-router-dom';
import UserNav from '../Pages/User Pages/UserNav/UserNav';

const UserDashBoard = () => {
    return (
        <div className='flex'>
            <div className="py-20 w-4/5">
                <Outlet />
            </div>
            <div className="w-1/5">
                <UserNav />
            </div>
        </div>
    );
};

export default UserDashBoard;