import Vue from 'vue';
import VueRouter from 'vue-router';

import login from '../components/login/Login.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/login', component: login }
  //   { path: '/', component: 'Foo' },
  //   { path: '/', component: 'Foo' }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
