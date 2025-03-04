import axios from "axios"

const instance = axios.create({
    baseUrl : ''
})
const useAxiosPublic = () => instance;
export default useAxiosPublic