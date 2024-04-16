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

const routes = [
  { path: '/', component: Home },
  { path: '/product', component: Pv, meta: {title: 'Product - GundFactory'} },
  { path: '/shop', component: Shop, meta: {title: 'Shop - GundFactory'} },
  { path: '/about', component: About, meta: {title: 'About - GundFactory'} },
  { path: '/checkout', component: Check, meta: {title: 'Checkout - GundFactory'} },
  { path: '/complete', component: Complete, meta: {title: 'Thank you, username'}},
  { path: '/news', component: News, meta: {title: 'Practice'}},
  { path: '/high-grade', component: HG, meta: {title: 'Category - Hg'}},
  { path: '/real-grade', component: RG, meta: {title: 'Category - Rg'}},
  { path: '/master-grade', component: MG, meta: {title: 'Category - Mg'}},
  { path: '/perfect-grade', component: PG, meta: {title: 'Category - Pg'}},
  { path: '/others', component: OTHERS, meta: {title: 'Category - 1/100'}},
  { path: '/hires', component: HIRES, meta: {title: 'Category - Hires'}},
  { path: '/entry-grade', component: EG, meta: {title: 'Category - Eg'}},
  { path: '/super-deformed', component: SD, meta: {title: 'Category - Sd'}},



];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  }

});

router.beforeEach((to, from) => {
    document.title = to.meta?.title ?? 'GundFactory'
})
export default router;
