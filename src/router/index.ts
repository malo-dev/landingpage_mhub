import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '@/pages/LandingPage.vue';
import RegisterCommercePage from '@/pages/RegisterCommercePage.vue';
import ReabonnementPage from '@/pages/ReabonnementPage.vue';
import AbonnementPage from '@/pages/AbonnementPage.vue';
import OffresPage from '@/pages/OffresPage.vue';
import ContactPage from '@/pages/ContactPage.vue';
import CarrieresPage from '@/pages/CarrieresPage.vue';
import PolitiqueConfidentialitePage from '@/pages/PolitiqueConfidentialitePage.vue';
import MarketPrivacyPage from '@/pages/MarketPrivacyPage.vue';
import MarketAccountDeletionPage from '@/pages/MarketAccountDeletionPage.vue';
import MarketMarketingPage from '@/pages/MarketMarketingPage.vue';
import MarketPrivacyChoicesPage from '@/pages/MarketPrivacyChoicesPage.vue';
import MailPrivacyPage from '@/pages/MailPrivacyPage.vue';
import MailAccountDeletionPage from '@/pages/MailAccountDeletionPage.vue';
import MStoreMarketingPage from '@/pages/MStoreMarketingPage.vue';
import MStoreSupportPage from '@/pages/MStoreSupportPage.vue';
import MStoreAccountDeletionPage from '@/pages/MStoreAccountDeletionPage.vue';

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
    { path: '/m-store',                      component: MStoreMarketingPage },
    { path: '/m-store/support',              component: MStoreSupportPage },
    { path: '/m-store/confidentialite',      component: PolitiqueConfidentialitePage },
    { path: '/m-store/suppression-compte',   component: MStoreAccountDeletionPage },
    { path: '/m-market',                     component: MarketMarketingPage },
    { path: '/m-market/confidentialite',     component: MarketPrivacyPage },
    { path: '/m-market/suppression-compte',  component: MarketAccountDeletionPage },
    { path: '/m-market/choix-confidentialite', component: MarketPrivacyChoicesPage },
    { path: '/m-mail/confidentialite',       component: MailPrivacyPage },
    { path: '/m-mail/suppression-compte',    component: MailAccountDeletionPage },
  ],
});

export default router;
