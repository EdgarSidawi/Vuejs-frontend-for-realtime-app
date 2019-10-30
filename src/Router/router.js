import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  //   { path: '/', component: 'Foo' },
  //   { path: '/', component: 'Foo' },
  //   { path: '/', component: 'Foo' }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
