import './cart.css'
import SectionTitle from '../../../Components/Common/SectionTitle';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';

const Cart = () => {
    const cartItems = useSelector(state => state.cart.cartItems)
    const totalPrice = cartItems.reduce((sum, product) => sum + product.price * product.count , 0);
    const discount = 0;
    return (
        <div>
            <SectionTitle title={'Your Cart'} subtitle={`You've added ${cartItems.length} item's `} />
                <div className="w-3/4 mx-auto">
                    <table className='cart-items w-full m-10'>
                        <thead>
                            <tr className='bg-gray-200'>
                                <th>Items</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th>View</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cartItems.map(cart => <CartItem key={cart._id} data={cart}/>)
                            }
                        </tbody>
                    </table>
                    <div className='w-2/5 float-end py-5'>
                        <div className="flex justify-between items-center">
                            <h2 className="font-medium">Subtotal:</h2>
                            <span className='font-bold'>{totalPrice}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <h2 className="font-medium">Discount:</h2>
                            <span className='font-bold'>{discount}</span>
                        </div>
                        <div className="divider"></div>
                        <div className="flex text-2xl font-bold justify-between items-center">
                            <h2>Grand Total:</h2>
                            <span >{totalPrice - discount}</span>
                        </div>
                        <Link className='w-full bg-[#03500f] text-white inline-block p-2 text-center' to={''}>Check Out</Link>
                    </div>
                </div>
            </div>
    );
};

export default Cart;