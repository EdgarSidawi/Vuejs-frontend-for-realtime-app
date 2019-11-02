import Vue from 'vue';
import VueRouter from 'vue-router';

import login from '../components/login/Login.vue';
import signup from '../components/signup/Signup.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/login', component: login },
  { path: '/signup', component: signup }
  //   { path: '/', component: 'Foo' }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
