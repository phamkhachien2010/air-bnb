import axiosApi from "."

export const loginApi = (userLogin) => {
    return axiosApi.post('/api/auth/login', userLogin)
}