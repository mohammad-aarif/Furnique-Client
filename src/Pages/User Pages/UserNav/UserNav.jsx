import useAuth from '../../../Hooks/Auth/useAuth';
import './UserNav.css';
import { NavLink } from 'react-router-dom';
const UserNav = () => {  
    const { logOut }  = useAuth()
    const handleLogOut = () => {
        logOut()
    }
    return (
        <div className='user-nav pt-20'>
            <NavLink to='/user/cart' className=''> Cart Items</NavLink>
            <NavLink to='/user/liked' className='' >Liked</NavLink>
            <NavLink to='/user/orders' className= '' >Orders</NavLink>
            <NavLink to='/user/profile' className=''>Update Profile</NavLink>
            <button onClick={handleLogOut}>SingOut</button>
        </div>
    );
};

export default UserNav;