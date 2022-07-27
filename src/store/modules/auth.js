import { loginApi } from "@/api/auth"
import { STATUS_CODE, USER_LOGIN } from "@/configs"

const state = () => {
    return {
        userLogin: {}
    }
}

const mutations = {
    setLoginMutations(state, payload) {
        state.userLogin = payload
        localStorage.setItem(USER_LOGIN, JSON.stringify(payload))
    },
    setUserLoginLocalStoageMutation(state, payload) {
        state.userLogin = payload
    }
}

const actions = {
    async loginAction({ commit }, payload) {
        try {
            const { data, status } = await loginApi(payload.userLogin);
            if (status === STATUS_CODE.SUCCESS) {
                alert('Đăng nhập thành công')
                payload.router.push('/')
                commit('setLoginMutations', data)
            } else {
                alert('Tài khoản hoặc mật khẩu không đúng')
            }
        } catch (error) {
            alert('Tài khoản hoặc mật khẩu không đúng')
        }
    },
    loadUserLoginAction({ commit }) {
        let userLogin = {};
        if (localStorage.getItem(USER_LOGIN)) {
            userLogin = JSON.parse(localStorage.getItem(USER_LOGIN))
        }
        commit('setUserLoginLocalStoageMutation', userLogin)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}