import React from 'react';

const ProductHeader = () => {
    return (
        <div className='flex px-8 justify-between'>
            <p>Something text</p>
            <div className='flex items-center sort'>
                <p>Sort By:</p>
                <select className='rounded-sm mx-5'>
                    <option value="latest">Deafult</option>
                    <option value="h2l">Price (High {'>'} Low)</option>
                    <option value="l2h">Price (Low {'>'} High)</option>
                </select>
            </div>
        </div>
    );
};

export default ProductHeader;