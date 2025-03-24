import React from 'react';
import { useSelector } from 'react-redux';

const UserAvatar = () => {
    const user = useSelector(state => state.auth.user)
    const firstLetter = user?.displayName?.split('')?.[0]
    console.log(firstLetter)
    return (
        <div>
            {
            user?.photoURL
                ? <img className='rounded-full m-2 w-1/3' src={user?.photoURL} alt='user'/>
                : <div className='uppercase bg-slate-600 text-slate-100 m-2 px-3 py-1 rounded-full'>{firstLetter}</div>
            }

        </div>
    );
};

export default UserAvatar;