import axios from "axios";

const axiosurl = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true
})

const useAxiosUrl = () => {
   return axiosurl;
};

export default useAxiosUrl;