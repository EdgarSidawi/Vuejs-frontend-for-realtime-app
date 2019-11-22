import Vue from 'vue';
import Vuex from 'vuex';
import { stat } from 'fs';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    isLoggedIn: false,
    isAdmin: false
  },
  getters: {
    isLoggedIn: state => {
      return state.isLoggedIn;
    }
  },
  mutations: {
    isLoggedIn: (state, data) => {
      localStorage.setItem('token', data.access_token);
      localStorage.setItem('user', data.user);
      localStorage.setItem('user_id', data.user_id);
      state.isLoggedIn = true;

      if (data.user_id == 1) {
        state.isAdmin = true;
      }
    },
    isLoggedOut: state => {
      localStorage.clear();
      state.isLoggedIn = false;
      state.isAdmin = false;
    },
    isAdmin: state => {
      state.isAdmin = true;
    }
  }
});
