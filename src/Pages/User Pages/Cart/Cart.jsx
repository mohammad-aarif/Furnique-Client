import './cart.css'
import SectionTitle from '../../../Components/Common/SectionTitle';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';

const Cart = () => {
    const cartItems = useSelector(state => state.cart.cartItems)
    return (
        <div>
            <SectionTitle title={'Your Cart'} subtitle={`You've added ${cartItems.length} item's `} />
            <div className="flex w-4/5">
                <div className="w-3/4">
                    <table className='cart-items table-auto w-full m-10'>
                        <tr className='bg-gray-200'>
                            <th>Items</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th>View</th>
                        </tr>
                        {
                            cartItems.map(cart => <CartItem key={cart._id} data={cart}/>)
                        }

                    </table>
                </div>
                <div className="w-1/4">
                </div>
            </div>
        </div>
    );
};

export default Cart;