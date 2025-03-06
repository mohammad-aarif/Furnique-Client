import { useEffect, useState } from 'react';
import useAxiosPublic from '../Axios/useAxiosPublic'

const useCategories = () => {
    const [categories, setCategories] = useState([])
    useEffect(()=>{
        useAxiosPublic.get('/categories')
        .then(data => setCategories(data.data))
    },[])
    return categories
};

export default useCategories;