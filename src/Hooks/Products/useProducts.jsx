import { useEffect, useState } from "react";
import useAxiosPublic from "../Axios/useAxiosPublic";

const useProducts = (query) => {
    const [newArrivalData, setNewArrivalData] = useState([])
    const [featuredData, setFeaturedData] = useState([])
    
    useEffect(
        () => {
            useAxiosPublic.get('/products')
            .then(data => setNewArrivalData(data.data))
        }, []
    )
    useEffect(
        () => {
            useAxiosPublic.get(`/products/featured?home=${query}`)
            .then(data => setFeaturedData(data.data))
        }, [query]
    )
    return {
        newArrivalData,
        featuredData
    }
};

export default useProducts;