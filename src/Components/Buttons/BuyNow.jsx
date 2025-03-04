import { Link } from "react-router-dom";

const BuyNow = ({link}) => {
    return (
        <div>
        <Link className='bg-gray-300 rounded-sm hover:bg-amber-400 inline-block px-6 py-1 my-2' to={link}>Buy Now</Link>

        </div>
    );
};

export default BuyNow;