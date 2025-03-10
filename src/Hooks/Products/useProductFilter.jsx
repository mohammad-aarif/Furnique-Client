import React, { useEffect, useState } from 'react';
import useAxiosPublic from '../Axios/useAxiosPublic';

const useProductFilter = (pageNumber) => {
    const [filteredProduct, setFilteredProduct] = useState([])
    // Getting All Products
    useEffect(
        () => {
            useAxiosPublic.get(`/products?page=${pageNumber}`)
            .then(data => setFilteredProduct(data.data))
        }, [pageNumber]
    )

    return filteredProduct
};

export default useProductFilter;