import { NavLink } from 'react-router-dom';
import { CiShoppingCart, CiSearch, CiUser } from "react-icons/ci";
import './shared.css'
import { useSelector } from 'react-redux';
const Navbar = () => {
    const cart = useSelector(state => state.cart.cartItems)
    const cartLength = cart.reduce((sum, data) => sum + data?.count, 0)
    return (
        <div className="navbar px-12 py-2 gap-2">
            <div className="md:w-2/3"><img src="/src/assets/Logo.png" alt="Furnique Logo" /></div>
            <div className="col-span-3 font-medium flex justify-around">
                <NavLink className={({isActive}) => isActive ? 'text-amber-600' : ''
                } to='/'>Home</NavLink>
                <NavLink className={({isActive}) => isActive ? 'text-amber-600' : ''
                } to='/products'>Products</NavLink>
                <NavLink className={({isActive}) => isActive ? 'text-amber-600' : ''
                } to='/catagory'>Catagory</NavLink>
                <NavLink className={({isActive}) => isActive ? 'text-amber-600' : ''
                } to='outlets'>Outlets</NavLink>
                <NavLink className={({isActive}) => isActive ? 'text-amber-600' : ''
                } to='/contact-us'>Contact us</NavLink>
            </div>
            <div className='col-span-2 nav-user text-2xl'>
                <form className='search-bar' action="get">
                    <input type="text" placeholder='Search Products' name="query" />
                    <CiSearch  />
                </form>
                <div className="cart-icon">
                    <NavLink to={'/user/cart'} >
                        <CiShoppingCart className='mx-5'/>
                        {cartLength ? <span className='absolute'>{cartLength}</span>: ''}
                    </NavLink>
                </div>
                <CiUser />
            </div>
        </div>
    );
};

export default Navbar;