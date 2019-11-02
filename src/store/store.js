import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    isLoggedIn: false
  },
  mutations: {
    isLoggedIn: state => {
      state.isLoggedIn = true;
    },
    isLoggedOut: state => {
      state.isLoggedIn = false;
    }
  }
});
