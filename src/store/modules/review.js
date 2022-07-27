import { getReviewByRoomIdAPI } from "@/api/review"
import { STATUS_CODE } from "@/configs"
import { formatDateDayMonthYear } from "@/utils/formatDate"
import Swal from "sweetalert2"

const state = () => {
    return {
        listReview: []
    }
}

const mutations = {
    getReviewByRoomIdMutation(state, payload) {
        state.listReview = payload.map((item) => {
            return {
                ...item,
                dateCreate: formatDateDayMonthYear(item.created_at)
            }
        })

    }
}

const actions = {
    async getReviewByRoomIdAction({ commit }, payload) {
        try {
            const { data, status } = await getReviewByRoomIdAPI(payload);
            if (status === STATUS_CODE.SUCCESS) {
                commit('getReviewByRoomIdMutation', data)
            } else {
                Swal.fire({
                    icon: 'error',
                    title: data.message,
                    text: 'Something went wrong!',
                })
            }

        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: error.response.data.message,
                text: 'Something went wrong!',
            })
        }
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}