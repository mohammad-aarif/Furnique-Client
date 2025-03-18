import { BsCartPlus } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { GiRoundStar } from "react-icons/gi";
import { IoIosExpand } from "react-icons/io";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../Redux/Reducer/cartSlice";

const ProductCard = ({link, className, data}) => {
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
    return (
        <Link to={link} className={`p-2 mx-1 bg-gray-100 shadow-sm rounded-lg inline-block ${className}`}>
            <div className="rounded-lg product-img relative">
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
                <img src={data?.image?.[0]} alt={data?.title} />
            </div>
            <div className="pt-1 flex flex-col h-24 justify-between">
                <div className="flex justify-between">
                    <p className="text-sm text-gray-600">{data?.sub_cat}</p>
                    <span><GiRoundStar className="text-amber-400 inline"/> ({data?.ratting})</span>
                </div>
                <div className="">
                    <h2 className="text-lg font-medium">{(data?.title)?.split(" ").slice(0, 3).join(" ")}</h2>
                    <h2 className="text-md font-bold text-green-800"> &#2547; {data?.price}</h2>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;