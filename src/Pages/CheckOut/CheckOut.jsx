import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import './checkout.css';
import ProgressBar from './ProgressBar';

const CheckOut = () => {
    const navigate = useNavigate();
    const user = useSelector(state => state?.auth?.user);
    useEffect(() =>{
        if(user == null){
            console.log('here');        
            navigate('/');
        }
    },[user, navigate])

    return (
        <div className='flex p-16'>
            <div className="w-5/3 check-out">
                <h2 className='text-4xl font-bold'>Check-out</h2>
                <ProgressBar />
                <Outlet />
            </div>
            <div className="w-5/2">
                cart
            </div>
        </div>
    );
};

export default CheckOut;