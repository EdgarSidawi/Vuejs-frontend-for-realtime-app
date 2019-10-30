import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';

import router from './Router/router';

Vue.config.productionTip = false;

// Vue.use(axios);
Vue.use(VueResource);

Vue.http.options.root = 'http://127.0.0.1:8000/';

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
