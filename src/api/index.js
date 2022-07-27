import { BASE_URL, TOKEN_BY_CLASS } from "@/configs";
import axios from "axios";

const axiosApi = axios.create({
    baseURL: BASE_URL
})

axiosApi.interceptors.request.use(
    function(config) {
        config.headers.tokenByClass = TOKEN_BY_CLASS
        return config
    },
    function(error) {
        return Promise.reject(error)
    }
);

axiosApi.interceptors.response.use(
    function(response) {
        return response
    },
    function(error) {
        return Promise.reject(error)
    }
)

export default axiosApi;