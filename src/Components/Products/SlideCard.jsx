import React from 'react';
import BuyNow from '../Buttons/BuyNow';
import { GiRoundStar } from 'react-icons/gi';
import { CiHeart } from 'react-icons/ci';
import { IoIosExpand } from 'react-icons/io';
import { BsCartPlus } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Redux/Reducer/cartSlice';

const SlideCard = ({data}) => {
    const dispatch = useDispatch()
    const handleAddToCart = () => {
        const newProductData = {
            _id: data._id,
            price: data.price,
            title: data.title,
            image: data.image
        }
        dispatch(addToCart(newProductData))    
    }

    const subtitle = (data?.sub_title)?.split(" ").slice(0, 5).join(" ") + " ..."          
    return (
    <div className="flex product-img h-56 bg-gray-100 rounded-2xl my-6">
        <div className="w-1/2 relative">
        <div className="overlay-icon">
            <button onClick={handleAddToCart} className='icon'>
            <BsCartPlus />
            </button>
            <button className='icon'>
            <IoIosExpand />
            </button>
            <button className='icon'>
            <CiHeart />
            </button>
        </div>
        <img src={data?.image?.[0]} alt={data.title} />
        </div>
        <div className="w-1/2 flex flex-col justify-between p-2">
        <div>
            <span className='text-gray-600'>{data?.sub_cat}</span>
            <h2 className='text-xl'>{data?.title}</h2>
            <p className='text-xs'>{subtitle}</p>
        </div>
        <div>
            <h3 className='text-xl font-bold text-green-800'>&#2547; {data?.price}</h3>
            <div className=""><GiRoundStar className='text-amber-400 inline'/> ({data?.ratting})</div>
            <BuyNow link={'/'} />
        </div>
        </div>
    </div>
    );
};

export default SlideCard;