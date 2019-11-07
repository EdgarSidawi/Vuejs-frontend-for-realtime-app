import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';
import { store } from './store/store';
import VueSimplemde from 'vue-simplemde';
import 'simplemde/dist/simplemde.min.css';

import router from './Router/router';

Vue.config.productionTip = false;

Vue.component('vue-simplemde', VueSimplemde);

axios.defaults.baseURL = 'http://127.0.0.1:8000';
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem(
  'token'
)}`;

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app');
