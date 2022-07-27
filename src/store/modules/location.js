import { getListLocationApi, getLocationDetailApi } from "@/api/location";
import { STATUS_CODE } from "@/configs";
import Swal from "sweetalert2";

const state = () => {
    return {
        listLocation: [],
        locationById: {}
    }
};

const mutations = {
    setListLocationMutation(state, payload) {
        state.listLocation = payload
    },
    setLocationByIdMutation(state, payload) {
        state.locationById = payload
    }
};

const actions = {
    async getListLocationActions({ commit }, payload) {
        try {
            const { data, status } = await getListLocationApi(payload);
            if (status === STATUS_CODE.SUCCESS) {
                commit('setListLocationMutation', data)
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                })
            }
        } catch (error) {
            console.log(error);
        }
    },
    async getLocationDetailAction({ commit }, payload) {
        try {
            const { data, status } = await getLocationDetailApi(payload);
            if (status === STATUS_CODE.SUCCESS) {
                commit('setLocationByIdMutation', data)
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                })
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
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