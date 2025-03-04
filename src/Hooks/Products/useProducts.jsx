import axios from "axios";
import { useEffect, useState } from "react";

const useProducts = () => {
    const [newArrivalData, setNewArrivalData] = useState([])
    useEffect(
        () => {
            axios.get('/Bed.json')
            .then(data => setNewArrivalData(data.data))
        }, []
    )
    return {
        newArrivalData
    }
};

export default useProducts;