import React, { useEffect } from 'react';
import UserDashBoard from '../Layout/UserDashBoard';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const UserRoute = () => {
    const user = useSelector(state => state.auth.user)
    const navigate = useNavigate()
    useEffect(()=>{
        if(!user){
            navigate('/auth')
        }
    }, [user, navigate])       
    return (
        <div>
            <UserDashBoard />
        </div>
    );
};

export default UserRoute;