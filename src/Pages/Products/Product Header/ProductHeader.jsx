import React, { useEffect, useState } from 'react';

const ProductHeader = () => {
    const [sort, setSort] = useState(() =>{
        const storedData = localStorage.getItem('product_filter')
        return storedData ? JSON.parse(storedData) : {sortBy: null, category: []}
    })
    const handleVisibility = (e) => {
        setSort(preData => ({
            ...preData,
            sortBy: e.target.value
        }))
    }
    useEffect(() => {
        localStorage.setItem('product_filter', JSON.stringify(sort))
    },[sort])

   
    return (
        <div className='flex px-8 justify-between'>
            <p>Something text</p>
            <div className='flex items-center sort'>
                <p>Sort By:</p>
                <select onChange={handleVisibility} className='rounded-sm mx-5'>
                    <option value="latest">Deafult</option>
                    <option value="h2l">Price (High {'>'} Low)</option>
                    <option value="l2h">Price (Low {'>'} High)</option>
                </select>
            </div>
        </div>
    );
};

export default ProductHeader;