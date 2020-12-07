import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menuKey: ['map']
  },
  mutations: {
    SET_MENU_KEY(state, key) {
      state.menuKey = key
    }
  },
  actions: {},
  modules: {}
})
