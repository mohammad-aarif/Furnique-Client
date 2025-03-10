import { useEffect, useState } from "react";
import useAxiosPublic from "../Axios/useAxiosPublic";

const useProducts = (query) => {
        
    const [newArrivalData, setNewArrivalData] = useState([])
    const [featuredData, setFeaturedData] = useState([])
    const [productCount , setProductCount] = useState(0)

    // Getting Total Number of Products 
    useEffect(
        () => {
            useAxiosPublic.get('/products/count')
            .then(data => setProductCount(data.data.count))
        }, []
    )
    // New Arrival Products 
    useEffect(
        () => {
            useAxiosPublic.get('/products/new-arrival')
            .then(data => setNewArrivalData(data.data))
        }, []
    )
    // Featured Products 
    useEffect(
        () => {
            useAxiosPublic.get(`/products/featured?home=${query}`)
            .then(data => setFeaturedData(data.data))
        }, [query]
    )

    return {
        newArrivalData,
        featuredData,
        productCount
    }
};

export default useProducts;