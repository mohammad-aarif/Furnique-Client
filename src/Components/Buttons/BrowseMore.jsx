import { IoIosArrowRoundForward } from 'react-icons/io';
import { Link } from 'react-router-dom';

const BrowseMore = ({link, className}) => {
    return (
        <Link to={link}>
            <div className={`flex flex-col bg-gray-100 justify-center items-center rounded-2xl ${className}`}>
              <IoIosArrowRoundForward className='rounded-full p-1 text-5xl bg-gray-300' />
              <p className="text-gray-600">Browse More</p>
            </div>
        </Link>
    );
};

export default BrowseMore;