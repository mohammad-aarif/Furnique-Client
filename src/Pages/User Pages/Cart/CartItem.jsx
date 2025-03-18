import { HiMinusSm } from 'react-icons/hi';
import ShopNow from '../../../Components/Buttons/ShopNow'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../../../Redux/Reducer/cartSlice';

const CartItem = ({data}) => {
    const dispatch = useDispatch();
    const handleRemoveCart = id => {
        dispatch(removeFromCart(id))
    }
    const handleAddCart = data => {
        dispatch(addToCart(data))
    }
    return (
        <tr>
            <td>
                <div className="flex justify-around items-center">
                    <div className="w-1/5">
                        <img className='w-full' src={data?.image?.[0]} alt="" />
                    </div>
                    <div className="w-4/5 px-3">
                        <p className='font-semibold text-md'>{data?.title}</p>
                    </div>
                </div>
            </td>
            <td>৳ {data?.price}</td>
            <td>
                <div className="flex">
                    <button onClick={() => handleRemoveCart(data?._id)} className='px-3 py-1 bg-gray-300 rounded-l-md'> <HiMinusSm /></button>
                    <span className='px-3 py-1 border-2 border-gray-300 '>{data?.count}</span>
                    <button onClick={() => handleAddCart(data)} className='px-3 py-1 bg-gray-300 rounded-r-md'>+</button>
                </div>
            </td>
            <td className='font-semibold'>৳ {data?.price * data?.count}</td>
            <td><Link to={`/products/${data?._id}`} className='px-6 py-2 bg-amber-400'>See Details</Link></td>
    </tr>
    );
};

export default CartItem;