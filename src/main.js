import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';
import { store } from './store/store';

import router from './Router/router';
import User from './Helpers/Users';

Vue.config.productionTip = false;

axios.defaults.baseURL = 'http://127.0.0.1:8000';
window.User = User;
console.log('user ', User);
console.log('Widow.user ', User);

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app');
