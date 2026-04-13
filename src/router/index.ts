import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '@/pages/LandingPage.vue';
import RegisterCommercePage from '@/pages/RegisterCommercePage.vue';
import ReabonnementPage from '@/pages/ReabonnementPage.vue';
import AbonnementPage from '@/pages/AbonnementPage.vue';
import OffresPage from '@/pages/OffresPage.vue';
import ContactPage from '@/pages/ContactPage.vue';
import CarrieresPage from '@/pages/CarrieresPage.vue';
import PolitiqueConfidentialitePage from '@/pages/PolitiqueConfidentialitePage.vue';

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to) {
    if (to.hash) return { el: to.hash, behavior: 'smooth' };
    return { top: 0 };
  },
  routes: [
    { path: '/',                              component: LandingPage },
    { path: '/creer-commerce',               component: RegisterCommercePage },
    { path: '/reabonnement',                 component: ReabonnementPage },
    { path: '/abonnement/:token',            component: AbonnementPage },
    { path: '/offres',                       component: OffresPage },
    { path: '/contact',                      component: ContactPage },
    { path: '/carrieres',                    component: CarrieresPage },
    { path: '/politique-confidentialite',    component: PolitiqueConfidentialitePage },
  ],
});

export default router;
