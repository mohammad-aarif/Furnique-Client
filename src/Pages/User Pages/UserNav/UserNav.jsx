import './UserNav.css';
import { NavLink } from 'react-router-dom';

const UserNav = () => {    
    return (
        <div className='user-nav pt-20'>
            <NavLink to='/user/cart' className=''> Cart Items</NavLink>
            <NavLink to='/user/liked' className='' >Liked</NavLink>
            <NavLink to='/user/orders' className= '' >Orders</NavLink>
            {/* <NavLink to='/user/to-review' className=''>To Review</NavLink> */}
            <NavLink to='/user/profile' className=''>Update Profile</NavLink>
        </div>
    );
};

export default UserNav;