import { useEffect, useState } from "react";
import useAxiosPublic from "../Axios/useAxiosPublic";

const useProducts = (query) => {
    const [featuredData, setFeaturedData] = useState([])
    const [allProduct , setAllProduct] = useState([])
    
    useEffect(
        () => {
            useAxiosPublic.get(`/products?home=${query}`)
            .then(data => setAllProduct(data.data))
        }, [query]
    )

    useEffect(
        () => {
            useAxiosPublic.get(`/products/featured?home=${query}`)
            .then(data => setFeaturedData(data.data))
        }, [query]
    )
    return {
        featuredData,
        allProduct
    }
};

export default useProducts;