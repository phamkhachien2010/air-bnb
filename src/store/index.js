import { createStore } from 'vuex'
import location from './modules/location';
import room from './modules/room'
import review from './modules/review'
import auth from './modules/auth'
import ticket from './modules/ticket'

export default createStore({
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        location,
        room,
        review,
        auth,
        ticket,
    }
})