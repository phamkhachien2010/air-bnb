import { bookingRoomApi, getAllRoomApi, getListRoomByLocationApi, getRoomDetailByIdApi } from "@/api/room"
import { STATUS_CODE } from "@/configs"
import { filterRoomList } from "@/utils/filterRoomList"
import Swal from "sweetalert2"

const state = () => {
    return {
        listRoomByLocation: [],
        roomById: {},
        userDetail: {},
        adults: 0,
        children: 0,
        from: '',
        to: '',
        dateFrom: '',
        dateTo: '',
        checkIn: '',
        checkOut: '',
        listRoomFilter: [],
    }
}

const mutations = {
    setListRoomByLocationMutation(state, payload) {
        state.listRoomByLocation = payload
    },
    setRoomDetailMutation(state, payload) {
        state.roomById = payload
    },
    setBookingInfoMutation(state, payload) {
        state.children = payload.children;
        state.adults = payload.adults;
        state.from = payload.from;
        state.to = payload.to
    },
    setInfoBookingBookingRoomMutation(state) {
        state.dateFrom = state.from.slice(8, 10) + '/' + state.from.slice(5, 7) + '/' + state.from.slice(0, 4);
        state.dateTo = state.to.slice(8, 10) + '/' + state.to.slice(5, 7) + '/' + state.to.slice(0, 4);
        state.checkIn = state.from + 'T09:00:00.000+00:00';
        state.checkOut = state.to + 'T12:00:00.000+00:00';

    },
    setUserDetailMutation(state, payload) {
        state.userDetail = payload
    },
    setListRommFilterMutation(state, payload) {
        state.listRoomFilter = payload
    }
}

const actions = {
    async getListRoomByLocationActions({ commit }, payload) {
        try {
            const { data, status } = await getListRoomByLocationApi(payload)
            if (status === STATUS_CODE.SUCCESS) {
                commit('setListRoomByLocationMutation', data)
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            })
        }
    },
    async getRoomDetailByIdAction({ commit }, payload) {
        try {
            const { data, status } = await getRoomDetailByIdApi(payload);
            if (status === STATUS_CODE.SUCCESS) {
                commit('setRoomDetailMutation', data)
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
    },
    getBookingInfoAction({ commit }, payload) {
        commit('setBookingInfoMutation', payload)
    },
    setInfoBookingBookingRoomAction({ commit }) {
        commit('setInfoBookingBookingRoomMutation')
    },
    async bookingRoomAction({ commit }, payload) {
        try {
            const { data, status } = await bookingRoomApi(payload.bookingInfo);
            if (status === STATUS_CODE.SUCCESS) {
                commit('setUserDetailMutation', data.userDetail)
                payload.router.push('/booking-confirmation')
            }
        } catch (error) {
            console.log(error);
        }
    },
    async getListRoomFilterAction({ commit }, payload) {
        try {
            const { data, status } = await getAllRoomApi();
            if (status === STATUS_CODE.SUCCESS) {
                const listRoomFilter = filterRoomList(data, payload);
                commit("setListRommFilterMutation", listRoomFilter)
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