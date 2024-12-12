import axios, {AxiosInstance} from 'axios';
import { URL_API } from '../urls/urls';

const axiosClient: AxiosInstance = axios.create({
    baseURL: URL_API
});

//Interceptors de solicitudes
axiosClient.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("Token");
        if(token){
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosClient;