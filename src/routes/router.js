import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Pv from '../views/productView.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/product', component: Pv },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
