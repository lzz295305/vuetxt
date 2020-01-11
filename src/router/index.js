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
    path: '/home/topSpeed',
    name: 'home-topSpeed',
    component: () => import('pages/home/topSpeed')
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
    path: '/moreTask/:id',
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
    path: '/skillBranch',
    name: 'skillBranch',
    component: () => import('pages/skillBranch')
  },
  {
    path: '/skillDivision',
    name: 'skillDivision',
    component: () => import('pages/skillDivision')
  },
  {
    path: '/skillContact',
    name: 'skillContact',
    component: () => import('pages/skillContact')
  },
  {
    path: '/buySkill',
    name: 'buySkill',
    component: () => import('pages/buySkill')
  },
  {
    path: '/comment',
    name: 'comment',
    component: () => import('pages/skillDetail/comment')
  },
  {
    path: '/discussion',
    name: 'discussion',
    component: () => import('pages/discussion')
  },
  {
    path: '/news',
    name: 'news',
    component: () => import('pages/news')
  },
  {
    path: '/releaseTask',
    name: 'releaseTask',
    component: () => import('pages/home/releaseTask')
  },
  {
    path: '/releaseSkill',
    name: 'releaseSkill',
    component: () => import('pages/home/releaseSkill')
  },
  {
    path: '/releasePost',
    name: 'releasePost',
    component: () => import('pages/home/releasePost')
  },
  {
    path: '/releaseDynamic',
    name: 'releaseDynamic',
    component: () => import('pages/home/releaseDynamic')
  },
  {
    path: '/task-release',
    name: 'task-release',
    component: () => import('pages/release/task')
  },
  {
    path: '/skill-release',
    name: 'skill-release',
    component: () => import('pages/release/skill')
  },
  {
    path: '/skill-creation',
    name: 'skill-creation',
    component: () => import('pages/release/skillCreation')
  },
  {
    path: '/skill-build',
    name: 'skill-build',
    component: () => import('pages/release/skillBuild')
  },
  {
    path: '*',
    redirect: '/login'
  }
];

export default new Router({
  routes
});
