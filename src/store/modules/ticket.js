import { getTicketByUserApi } from "@/api/ticket"
import { STATUS_CODE } from "@/configs"

const state = () => {
    return {
        listTickets: []
    }
}

const mutations = {
    setTicketListByUserMutation(state, payload) {
        state.listTickets = payload
    }
}

const actions = {
    async getTicketsByUserAction({ commit }, payload) {
        try {
            const { data, status } = await getTicketByUserApi(payload);
            if (status === STATUS_CODE.SUCCESS) {
                commit('setTicketListByUserMutation', data)
            }
        } catch (error) {
            console.log(error);
        }
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}