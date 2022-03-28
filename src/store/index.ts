import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    login: 'alexey'
  },
  getters: {
  },
  mutations: {
    setLogin(state, n){
      state.login = n;
    }
  },
  actions: {
  },
  modules: {
  }
})
