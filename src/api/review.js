import axiosApi from "."

export const getReviewByRoomIdAPI = (roomId) => {
    return axiosApi.get(`/api/reviews/byRoom?roomId=${roomId}`)
}