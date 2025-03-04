import ShopNow from '../../../Components/Buttons/ShopNow';
import './header.css'
const Header = () => {
    return (
        <div className="header md:grid-cols-2 px-16">
            <div className="header-info">
                <h1>Enhance Your Home With Elegance Furnishing</h1>
                <p className='my-2 text-lg'>Here You Will Find Charming Furniture At The Most Affordable Prices And Good Quality.</p>
                <ShopNow link='/products' />
                
            </div>
            <div className="header-img">
                <img className='w-full' src="/src/assets/b_img.png" alt="" />
            </div>
        </div>
    );
};

export default Header;