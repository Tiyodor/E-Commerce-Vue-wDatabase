import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Pv from '../views/productView.vue';
import Shop from '../views/shop.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/product', component: Pv },
  { path: '/shop', component: Shop },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
