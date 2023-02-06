const state = {
    userInfo: {}
}
const mutations = {
    ADD_USER_INFO: (state, msg) => {
        state.userInfo = {...msg }
    }
}
const actions = {
    addUserInfo({ commit }, msg) {
        commit('ADD_USER_INFO', msg)
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}