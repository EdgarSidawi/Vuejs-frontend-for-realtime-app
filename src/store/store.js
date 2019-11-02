import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    isLoggedIn: false
  },
  mutations: {
    isLoggedIn: (state, data) => {
      console.log('store: ', data);
      localStorage.setItem('token', data.access_token);
      localStorage.setItem('user', data.user);
      state.isLoggedIn = true;
    },
    isLoggedOut: state => {
      state.isLoggedIn = false;
    }
  }
});
