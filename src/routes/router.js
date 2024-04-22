import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Pv from '../views/productView.vue';
import Shop from '../views/shop.vue';
import About from '../views/about.vue';
import Check from '../views/Checkout.vue';
import Complete from '../views/Complete.vue';
import News from '../views/News.vue';
import HG from '../views/cat/hg.vue';
import RG from '../views/cat/rg.vue';
import MG from '../views/cat/mg.vue';
import PG from '../views/cat/pg.vue';
import HIRES from '../views/cat/hires.vue';
import OTHERS from '../views/cat/other.vue';
import EG from '../views/cat/eg.vue';
import SD from '../views/cat/sd.vue';
import PAYMENT from '../views/payment.vue';
import TERMS from '../views/terms.vue';
import SHIPPING from '../views/shipping.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/product/:id', component: Pv, meta: { title: 'Product - GundFactory' }, props: true },  // Dynamic segment for product ID
  { path: '/shop', component: Shop, meta: { title: 'Shop - GundFactory' }},
  { path: '/about', component: About, meta: { title: 'About - GundFactory' }},
  { path: '/checkout/:ids', component: Check, meta: { title: 'Checkout - GundFactory', props: true }},
  { path: '/order/success/:checkoutid', component: Complete, meta: { title: 'Thank you, come again', props: true}},
  { path: '/news', component: News, meta: { title: 'News - GundFactory' }},
  { path: '/shipping-policy', component: SHIPPING, meta: { title: 'Shipping Policy - GundFactory' }},
  { path: '/terms&conditions', component: TERMS, meta: { title: 'Terms and Conditions - GundFactory' }},
  { path: '/payment-method', component: PAYMENT, meta: { title: 'Payment Policy - GundFactory' }},
  { path: '/high-grade', component: HG, meta: { title: 'Category - HG' }},
  { path: '/real-grade', component: RG, meta: { title: 'Category - RG' }},
  { path: '/master-grade', component: MG, meta: { title: 'Category - MG' }},
  { path: '/perfect-grade', component: PG, meta: { title: 'Category - PG' }},
  { path: '/others', component: OTHERS, meta: { title: 'Category - 1/100' }},
  { path: '/hires', component: HIRES, meta: { title: 'Category - HIRES' }},
  { path: '/entry-grade', component: EG, meta: { title: 'Category - EG' }},
  { path: '/super-deformed', component: SD, meta: { title: 'Category - SD' }},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  }
});

router.beforeEach((to, from) => {
    document.title = to.meta?.title ?? 'GundFactory';
});

export default router;
