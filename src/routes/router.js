import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Pv from '../views/productView.vue';
import Shop from '../views/shop.vue';
import About from '../views/about.vue';
import Check from '../views/Checkout.vue';


const routes = [
  { path: '/', component: Home },
  { path: '/product', component: Pv },
  { path: '/shop', component: Shop },
  { path: '/about', component: About },
  { path: '/checkout', component: Check },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
