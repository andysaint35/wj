import Vue from 'vue';
import Router from 'vue-router';
//import home from '@/pages/home';
//import reward from '@/pages/reward';
//import question from '@/components/login'
const home = () => import('@/pages/home/home.vue');
const question = () => import('@/pages/question/question.vue');
const rules = () => import('@/pages/rules/rules.vue');
const list = () => import('@/pages/list/list.vue');
const fullscore = () => import('@/pages/fullscore/fullscore.vue');
const info = () => import('@/pages/info/info.vue');

Vue.use(Router);
const routes = [
  {
    path: '/',
    name: 'home',
    meta: {
      title: '冯氏小百科大挑战'
    },
    component: home
  },
  {
    path: '/question',
    name: 'question',
    meta: {
       title: '冯氏小百科大挑战'
    },
    component: question
  },
  ,
  {
    path: '/rules',
    name: 'rules',
    meta: {
       title: '冯氏小百科大挑战'
    },
    component: rules
  },
  {
    path: '/list',
    name: 'list',
    meta: {
       title: '冯氏小百科大挑战'
    },
    component: list
  },
  {
    path: '/fullscore',
    name: 'fullscore',
    meta: {
       title: '冯氏小百科大挑战'
    },
    component: fullscore
  },
  {
    path: '/info',
    name: 'info',
    meta: {
       title: '冯氏小百科大挑战'
    },
    component: info
  }
];

const router = new Router({
  routes
});

router.beforeEach((to, from, next) => {
  if(to.query.from){
      router.push({name: 'home'})
  }
  document.title = to.meta.title;
  next();
});

export default router;
