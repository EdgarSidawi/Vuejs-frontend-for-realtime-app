import Vue from 'vue';
import VueRouter from 'vue-router';

import login from '../components/login/Login.vue';
import signup from '../components/signup/Signup.vue';
import forum from '../components/forum/Forum.vue';
import category from '../components/category/Category.vue';
import read from '../components/forum/Read.vue';
import create from '../components/forum/Create.vue';
import editQuestion from '../components/forum/editQuestion.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/login', component: login },
  { path: '/signup', component: signup },
  { path: '/forum', component: forum },
  { path: '/category', component: category },
  { path: '/ask', component: create },
  { path: '/question/:slug', component: read },
  { path: '/editQuestion/:slug', component: editQuestion }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
