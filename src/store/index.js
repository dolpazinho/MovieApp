import { createStore } from 'vuex'

const SET_USER = "SET_USER" //set user constant

export default createStore({
  state: {
    user: {}
  },
  getters: {
  },
  mutations: {
    [SET_USER](state, user){
      state.user = user
    }
  },
  actions: {
  },
  modules: {
  }
})
