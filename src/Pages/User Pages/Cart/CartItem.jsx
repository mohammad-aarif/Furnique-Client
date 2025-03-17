import { HiMinusSm } from 'react-icons/hi';
import ShopNow from '../../../Components/Buttons/ShopNow'
import { Link } from 'react-router-dom';

const CartItem = ({data}) => {
    return (
        <tr>
            <td>
                <div className="flex justify-between items-center">
                    <img className='w-2/5 max-h-32' src={data?.image?.[0]} alt="" />
                    <p className='font-semibold text-md'>{data?.title}</p>
                </div>
            </td>
            <td>${data?.price}</td>
            <td>
                <div className="flex">
                    <button className='px-3 py-1 bg-gray-400 rounded-l-md'>+</button>
                    <span className='px-3 py-1 border-2 border-gray-400 '>{data?.count}</span>
                    <button className='px-3 py-1 bg-gray-400 rounded-r-md'> <HiMinusSm /></button>
                </div>
            </td>
            <td>{data?.price * data?.count}</td>
            <td><Link to={`/products/${data?._id}`} className='px-6 py-2 bg-amber-400'>See Details</Link></td>
    </tr>
    );
};

export default CartItem;