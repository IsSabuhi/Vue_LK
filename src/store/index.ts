import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lName: 'Pargachev',
    login: 'Alex',
  },
  getters: {
  },
  mutations: {
    setName(state, lName){
      state.lName = lName;
    },
    setLogin(state, login){
      state.login = login;
    }

  },
  actions: {
  },
  modules: {
  }
})
