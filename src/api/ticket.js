import axiosApi from "."

export const getTicketByUserApi = (userId) => {
    return axiosApi.get(`/api/tickets/by-user?userId=${userId}`)
}