import { useEffect, useState } from "react";
import useAxiosPublic from "../Axios/useAxiosPublic";

const useProducts = (query) => {
        
    const [newArrivalData, setNewArrivalData] = useState([])
    const [featuredData, setFeaturedData] = useState([])
    const [productCount , setProductCount] = useState(0)
    const axiosPublic = useAxiosPublic()

    // Getting Total Number of Products 
    useEffect(
        () => {
            axiosPublic.get('/products/count')
            .then(data => setProductCount(data.data.count))
        }, [axiosPublic]
    )
    // New Arrival Products 
    useEffect(
        () => {
            axiosPublic.get('/products/new-arrival')
            .then(data => setNewArrivalData(data.data))
        }, [axiosPublic]
    )
    // Featured Products 
    useEffect(
        () => {
            axiosPublic.get(`/products/featured?home=${query}`)
            .then(data => setFeaturedData(data.data))
        }, [query, axiosPublic]
    )

    return {
        newArrivalData,
        featuredData,
        productCount,
    }
};

export default useProducts;