import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:2626',
    withCredentials: true
})
const useAxiosSecure = () => {
    const {signOutUser} = useAuth();
    const navigate = useNavigate();
    // request interceptors:
    axiosSecure.interceptors.request.use((config) => {
        const token = localStorage.getItem('access-token');
       if(token){
        config.headers.authorization = `Bearer ${token}`;
        return config;
       }
    },
    (error) => {
        return Promise.reject(error);
    });
    // response interceptors:
    axiosSecure.interceptors.response.use((response) => {
        return response;
    }, async(error) => {
        const status = error.response.status;
        if(status === 401 || status === 403){
            await signOutUser();
            navigate("/login")
        }
        return Promise.reject(error)
    })
    return axiosSecure;
};

export default useAxiosSecure;