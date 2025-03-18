import './cart.css'
import SectionTitle from '../../../Components/Common/SectionTitle';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';

const Cart = () => {
    const cartItems = useSelector(state => state.cart.cartItems)
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
                </div>
            </div>
    );
};

export default Cart;