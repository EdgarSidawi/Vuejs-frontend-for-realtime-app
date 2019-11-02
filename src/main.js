import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';
import { store } from './store/store';

import router from './Router/router';

Vue.config.productionTip = false;

axios.defaults.baseURL = 'http://127.0.0.1:8000';

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app');
