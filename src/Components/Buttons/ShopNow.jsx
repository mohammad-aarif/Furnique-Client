import React from 'react';
import { Link } from 'react-router-dom';

const ShopNow = ({link}) => {
    return (
        <div>
            <Link className='bg-amber-400 hover:bg-amber-500 inline-block px-7 py-2 my-2' to={link}>Shop Now</Link>
        </div>
    );
};

export default ShopNow;