import { USER_LOGIN } from "@/configs"
import axiosApi from "."

export const getListRoomByLocationApi = (locationId) => {
    return axiosApi.get(`/api/rooms?locationId=${locationId}`)
}

export const getRoomDetailByIdApi = (roomId) => {
    return axiosApi.get(`/api/rooms/${roomId}`)
}

export const bookingRoomApi = (bookingInfo) => {
    const { token } = JSON.parse(localStorage.getItem(USER_LOGIN));
    return axiosApi.post('/api/rooms/booking', bookingInfo, {
        headers: { token }
    })
}

export const getAllRoomApi = () => {
    return axiosApi.get('api/rooms?skip=0&limit=10')
}