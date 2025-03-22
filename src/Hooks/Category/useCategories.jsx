import { useEffect, useState } from 'react';
import useAxiosPublic from '../Axios/useAxiosPublic'

const useCategories = () => {
    const [categories, setCategories] = useState([])
    const axiosPublic = useAxiosPublic()
    useEffect(()=>{
        axiosPublic.get('/categories')
        .then(data => setCategories(data.data))
    },[axiosPublic])
    return categories
};

export default useCategories;