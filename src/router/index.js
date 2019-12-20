import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('pages/login')
  },
  {
    path: '/login/rest',
    name: 'login/rest',
    component: () => import('pages/login/rest')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('pages/home'),
    children: [
      {
        path: 'product/:id',
        name: 'home-product',
        component: () => import('pages/product')
    }]
  },
  {
    path: '/skill',
    name: 'skill',
    component: () => import('pages/skill')
  },
  {
    path: '/community',
    name: 'community',
    component: () => import('pages/community')
  },
  {
    path: '/personal',
    name: 'personal',
    component: () => import('pages/personal')
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('pages/search')
  },
  {
    path: '*',
    redirect: '/login'
  }
];

export default new Router({
  // mode: 'hash',
  routes
});
