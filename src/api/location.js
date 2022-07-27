import axiosApi from "."

export const getListLocationApi = (location) => {
    return axiosApi.get(`/api/locations?location=${location}`)
}

export const getLocationDetailApi = (locationId) => {
    return axiosApi.get(`/api/locations/${locationId}`)
}