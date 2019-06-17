import Vue from 'vue'
import Router from 'vue-router'
import {router as docs} from './modules/docs/routes'; 
import {router as loginRoute} from './modules/login/routes';
import {router as signupRoute} from './modules/signup/routes';
import Layout from '@/Layout.vue';

Vue.use(Router)

const router = new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '',
      name: 'root',
      component: Layout,
      children: [...docs]
    },
    loginRoute,
    signupRoute,
  ]
});

router.beforeEach((to, from, next) => {
  if (to.path === '/' || to.path === '') {
    next('/files');
  } else {
    next();
  }
})

export default router;