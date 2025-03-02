import { Link } from 'react-router-dom';
import './shared.css'
const Footer = () => {
    return (
        <div className='p-12 footer'>
            <div className="grid grid-cols-4 gap-8">
                <div>
                    <img className='w-2/4 py-2' src="/src/assets/Logo_alter.png" alt="Furnique Logo" />
                <p className="text-sm">Furnique crafts stylish, high-quality furniture for modern and timeless spaces.</p>
                </div>
                <div className='flex flex-col'>
                    <h1>Quick Navigation</h1>
                    <Link to='/about-us'>About Us</Link>
                    <Link to='/about-us'>Terms & Condition</Link>
                </div>
                <div className='flex flex-col'>
                    <h1>Knowledge Base</h1>
                    <Link to='/faq'>FAQ</Link>
                    <Link to='/return-policy'>Return Policy</Link>
                    <Link to='/emi'>EMI</Link>
                    <Link to='/delivery'>Delivery</Link>
                    <Link to='/warranty'>Warranty</Link>
                    <Link to='/privacy-policy'>Privacy Policy</Link>
                </div>
                <div className='flex flex-col'>
                    <h1>Exciting</h1>
                    <div className="divider"></div>
                    <Link to='new-arraival'>New Arraival</Link>
                    <Link to='super-sale'>Super Sale</Link>
                </div>
            </div>
            <div className="divider"></div>
            <div className="flex justify-between">
                <p className='text-center'>{'\u00A9'} 2025 Furnique - All Right Reserved</p>
                <img className='w-2/4 ' src="/src/assets/ssl.d1fc24e.jpeg" alt="" />
            </div>
        </div>

    );
};

export default Footer;