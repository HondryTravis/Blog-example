import Vue from 'vue';
import Vuex from '@/store/my-vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    counter: 0,
  },
  mutations: {
    add(state) {
      state.counter += 1;
    },
  },
  actions: {
    add({ commit }) {
      setTimeout(() => {
        commit('add');
      }, 100);
    },
  },
  getters: {
    doubleCounter(state) {
      console.log(state)
      return state.counter * 2;
    },
  },
  modules: {},
});
