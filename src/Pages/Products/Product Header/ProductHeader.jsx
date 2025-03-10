import React, { useEffect, useState } from 'react';

const ProductHeader = () => {
    const [sort, setSort] = useState(() =>{
        const storedData = localStorage.getItem('sort')
        return storedData ? JSON.parse(storedData) : {sortBy:'latest'}
    })
    const handleVisibility = (e) => {

        setSort({sort: e.target.value})
    }
    
    useEffect(() => {
        localStorage.setItem('sort', JSON.stringify(sort))
    },[sort])

   
    return (
        <div className='flex px-8 justify-between'>
            <p>Something text</p>
            <div className='flex items-center sort'>
                <p>Sort By:</p>
        <select onChange={handleVisibility} defaultValue={sort.sort} className='rounded-sm mx-5'>
                    <option value="latest">Deafult</option>
                    <option value="h2l">Price (High {'>'} Low)</option>
                    <option value="l2h">Price (Low {'>'} High)</option>
                </select>
            </div>
        </div>
    );
};

export default ProductHeader;