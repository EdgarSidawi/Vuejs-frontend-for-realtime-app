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
      localStorage.setItem('user_id', data.user_id);
      state.isLoggedIn = true;
    },
    isLoggedOut: state => {
      localStorage.clear();
      state.isLoggedIn = false;
    }
  }
});
