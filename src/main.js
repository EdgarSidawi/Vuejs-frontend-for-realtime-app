import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';

import router from './Router/router';
import User from './Helpers/Users';

Vue.config.productionTip = false;

axios.defaults.baseURL = 'http://127.0.0.1:8000';
window.User = User;

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
