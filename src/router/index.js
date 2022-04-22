import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from '@/views';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Dashboard,
    },
  ],
});
