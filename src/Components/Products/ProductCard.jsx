import { GiRoundStar } from "react-icons/gi";
import { Link } from "react-router-dom";

const ProductCard = ({link, className, data}) => {
    return (
        <Link to={link} className={`px-2 mx-1 bg-gray-100 shadow-md rounded-lg inline-block ${className}`}>
            <div className="rounded-lg">
                <img src={data?.image?.[0]} alt={data?.title} />
            </div>
            <div className="">
                <div className="flex justify-between">
                    <p className="text-sm text-gray-600">{data?.sub_cat}</p>
                    <span><GiRoundStar className="text-amber-400 inline"/> ({data?.ratting})</span>
                </div>
                <div className="">
                    <h2 className="text-xl">{data?.title}</h2>
                    <p className="text-sm">{data?.sub_title}</p>
                    <h2 className="text-md"> &#2547; {data?.price}</h2>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;