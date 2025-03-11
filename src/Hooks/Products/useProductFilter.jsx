import React, { useEffect, useState } from 'react';
import useAxiosPublic from '../Axios/useAxiosPublic';
import { useSelector } from 'react-redux';

const useProductFilter = (pageNumber) => {
    const [filteredProduct, setFilteredProduct] = useState([])

    const {categories, sortBy} = useSelector(state => state.filter)
    const queryBuilder = () =>{
        const queryParams = new URLSearchParams()
        if(categories.length){
            queryParams.append('cat',categories.join(','))
        }
        if(sortBy !== 'latest'){
            queryParams.append('sort', sortBy)
        }
        queryParams.append('page', pageNumber)
        return queryParams.toString()
    }
    // Getting All Products
    const query = queryBuilder()
    
    useEffect(
        () => {
            useAxiosPublic.get(`/products?${query}`)
            .then(data => setFilteredProduct(data.data))
        }, [query, pageNumber]
    )

    return filteredProduct
};

export default useProductFilter;