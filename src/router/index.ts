import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '@/pages/LandingPage.vue';
import RegisterCommercePage from '@/pages/RegisterCommercePage.vue';
import ReabonnementPage from '@/pages/ReabonnementPage.vue';
import AbonnementPage from '@/pages/AbonnementPage.vue';
import OffresPage from '@/pages/OffresPage.vue';

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to) {
    if (to.hash) return { el: to.hash, behavior: 'smooth' };
    return { top: 0 };
  },
  routes: [
    { path: '/',                     component: LandingPage },
    { path: '/creer-commerce',       component: RegisterCommercePage },
    { path: '/reabonnement',         component: ReabonnementPage },
    { path: '/abonnement/:token',    component: AbonnementPage },
    { path: '/offres',               component: OffresPage },
  ],
});

export default router;
