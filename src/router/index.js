import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('pages/login'),
    children: [
      {
        path: '/passwordlogin',
        name: 'passwordlogin',
        component: () => import('pages/login/passwordlogin')
      },
      {
        path: '/verificationlogin',
        name: 'verificationlogin',
        component: () => import('pages/login/verificationlogin')
      }
    ]
  },
  {
    path: '/login/login',
    name: 'login/login',
    component: () => import('pages/login/login')
  },
  {
    path: '/login/register',
    name: 'login/register',
    component: () => import('pages/login/register')
  },
  {
    path: '/login/forget',
    name: 'login/forget',
    component: () => import('pages/login/forget')
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
        path: 'taskDetail/:id',
        name: 'home-taskDetail',
        component: () => import('pages/taskDetail')
      }
    ]
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
    path: '/skillDetail',
    name: 'skillDetail',
    component: () => import('pages/skillDetail')
  },
  {
    path: '/moreTask',
    name: 'home-moreTask',
    component: () => import('pages/moreTask')
  },
  {
    path: '/moreTask/support/:id',
    name: 'support',
    component: () => import('pages/moreTask/support')
  },
  {
    path: '/moreTask/allTask/:id',
    name: 'allTask',
    component: () => import('pages/moreTask/allTask')
  },
  {
    path: '/moreTask/play/:id',
    name: 'play',
    component: () => import('pages/moreTask/play')
  },
  {
    path: '/moreTask/crowd',
    name: 'crowd',
    component: () => import('pages/moreTask/crowd')
  },
  {
    path: '/moreTask/question',
    name: 'question',
    component: () => import('pages/moreTask/question')
  },
  {
    path: '/moreTask/alliance',
    name: 'alliance',
    component: () => import('pages/moreTask/alliance')
  },
  {
    path: '/issueskill',
    name: 'issueskill',
    component: () => import('pages/personal/issueskill'),
    children: [
      {
        path: 'ordermanagment',
        name: 'ordermanagment',
        component: () => import('pages/personal/ordermanagment')
      },
      {
        path: 'myskill',
        name: 'myskill',
        component: () => import('pages/personal/myskill')
      }
    ]
  },
  {
    path: '/personaldata',
    name: 'personaldata',
    component: () => import('pages/personal/personaldata')
  },
  {
    path: '/task',
    name: 'task',
    component: () => import('pages/personal/task')
  },
  {
    path: '/personaldata',
    name: 'personaldata',
    component: () => import('pages/personal/personaldata'),
    children: [
      {
        path: 'task',
        name: 'task',
        component: () => import('pages/personal/task')
      },
      {
        path: 'invitation',
        name: 'invitation',
        component: () => import('pages/personal/invitation')
      },
      {
        path: 'skill',
        name: 'skill',
        component: () => import('pages/personal/skill')
      },
      {
        path: 'dynamic',
        name: 'dynamic',
        component: () => import('pages/personal/dynamic')
      }
    ]
  },
  {
    path: '/editdata',
    name: 'editdata',
    component: () => import('pages/personal/editdata')
  },
  {
    path: '*',
    redirect: '/login'
  }
];

export default new Router({
  routes
});
