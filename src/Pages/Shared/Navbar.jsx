import { NavLink } from 'react-router-dom';
import './shared.css'
const Navbar = () => {
    return (
        <div className="navbar grid grid-cols-6 gap-2">
            <div className=""><img src="/src/assets/Logo.png" alt="Furnique Logo" /></div>
            <div className="col-span-4 flex justify-around">
                <NavLink to=''>Home</NavLink>
                <NavLink to=''>Products</NavLink>
                <NavLink to=''>Catagory</NavLink>
                <NavLink to=''>Outlets</NavLink>
                <NavLink to=''>Contact us</NavLink>
            </div>
            <div>user</div>
        </div>
    );
};

export default Navbar;