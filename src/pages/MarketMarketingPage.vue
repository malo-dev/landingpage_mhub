<script setup lang="ts">
import { useRouter } from "vue-router";
import { Button } from "@/components/ui/button";
import LogoMnethub from "@/components/LogoMnethub.vue";
import {
  ArrowLeft, Camera, Store, Users, Bell, Bike, Globe2,
  Heart, MapPin, Smartphone,
} from "lucide-vue-next";
import mmarketIcon from "@/assets/mmarket-icon.png";

const router = useRouter();

const features = [
  { icon: Camera, title: "Recherche par photo", text: "Une simple photo suffit pour retrouver un produit parmi les entreprises et vendeurs à proximité." },
  { icon: Store, title: "Entreprises & particuliers", text: "Boutiques locales et vendeurs individuels réunis dans un seul catalogue." },
  { icon: MapPin, title: "Autour de vous", text: "Trouvez les entreprises et vendeurs les plus proches, filtrez par catégorie." },
  { icon: Bell, title: "Suivi en temps réel", text: "Notifications à chaque étape : confirmation, préparation, livraison." },
  { icon: Heart, title: "Liste d'envies", text: "Sauvegardez vos produits préférés et retrouvez-les en un instant." },
  { icon: Bike, title: "Devenir livreur", text: "Inscrivez-vous directement depuis l'app et rejoignez le réseau de livraison." },
  { icon: Globe2, title: "Multi-langue", text: "Français, anglais, lingala, swahili — M-Market s'adapte à vous." },
  { icon: Users, title: "Avis & notes", text: "Consultez les avis de la communauté sur produits et vendeurs avant d'acheter." },
];
</script>

<template>
  <div class="relative min-h-screen overflow-hidden bg-background">
    <div class="grid-bg pointer-events-none absolute inset-0 -z-10 opacity-40" />

    <!-- Top bar -->
    <div class="glass-panel sticky top-0 z-40">
      <div class="container flex items-center justify-between py-3">
        <a href="/" class="flex items-center">
          <LogoMnethub variant="horizontal" class="text-foreground" icon-class="h-8 w-8" text-class="text-base" />
        </a>
        <Button variant="outline" size="sm" @click="router.back()" class="gap-2">
          <ArrowLeft class="size-4" /> Retour
        </Button>
      </div>
    </div>

    <!-- Hero -->
    <section class="container py-16 sm:py-24">
      <div class="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <div class="mb-4 inline-flex items-center gap-2 rounded-full border border-[#8e4e14]/30 bg-[#8e4e14]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#8e4e14] dark:border-[#ffab69]/30 dark:bg-[#ffab69]/10 dark:text-[#ffab69]">
            M-Market — par M-NETHUB
          </div>
          <h1 class="mb-4 text-4xl font-bold leading-tight sm:text-5xl">
            Votre shopping,
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#325559] to-[#8e4e14] dark:from-[#a8cdd1] dark:to-[#ffab69]">
              enfin simplifié
            </span>
          </h1>
          <p class="mb-8 max-w-lg text-lg text-muted-foreground">
            Découvrez des produits près de chez vous, proposés par des entreprises locales comme
            par des vendeurs particuliers. Recherchez, comparez et suivez votre commande — le tout
            depuis une seule application.
          </p>

          <div class="flex flex-wrap items-center gap-3">
            <div class="glass-panel tech-glow flex items-center gap-3 rounded-xl px-5 py-3 opacity-70">
              <Smartphone class="size-5" />
              <div class="text-left">
                <p class="text-[10px] uppercase tracking-wide text-muted-foreground">Bientôt disponible sur</p>
                <p class="text-sm font-bold">App Store</p>
              </div>
            </div>
            <div class="glass-panel tech-glow flex items-center gap-3 rounded-xl px-5 py-3 opacity-70">
              <Smartphone class="size-5" />
              <div class="text-left">
                <p class="text-[10px] uppercase tracking-wide text-muted-foreground">Bientôt disponible sur</p>
                <p class="text-sm font-bold">Google Play</p>
              </div>
            </div>
          </div>
        </div>

        <div class="relative flex justify-center">
          <div class="pointer-events-none absolute h-72 w-72 rounded-full bg-[#8e4e14]/20 blur-[100px] dark:bg-[#ffab69]/20" />
          <img :src="mmarketIcon" alt="Icône M-Market" class="relative h-56 w-56 drop-shadow-2xl sm:h-72 sm:w-72" />
        </div>
      </div>
    </section>

    <!-- Fonctionnalités -->
    <section class="container py-16 sm:py-20">
      <div class="mb-12 text-center">
        <h2 class="mb-3 text-3xl font-bold sm:text-4xl">Ce que vous pouvez faire</h2>
        <p class="mx-auto max-w-xl text-muted-foreground">
          Une app pensée pour le shopping local — simple pour les acheteurs, accessible pour les
          vendeurs.
        </p>
      </div>

      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="(f, i) in features"
          :key="i"
          class="glass-panel tech-glow flex flex-col gap-3 rounded-2xl p-5"
        >
          <div class="w-fit rounded-lg bg-[#8e4e14]/10 p-2.5 dark:bg-[#ffab69]/10">
            <component :is="f.icon" class="size-5 text-[#8e4e14] dark:text-[#ffab69]" />
          </div>
          <h3 class="font-bold">{{ f.title }}</h3>
          <p class="flex-1 text-sm text-muted-foreground">{{ f.text }}</p>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="container pb-24">
      <div class="glass-panel tech-glow rounded-3xl p-10 text-center sm:p-14">
        <h2 class="mb-3 text-2xl font-bold sm:text-3xl">Prêt à simplifier votre shopping ?</h2>
        <p class="mx-auto mb-6 max-w-lg text-muted-foreground">
          M-Market arrive bientôt sur App Store et Google Play. Envie de vendre plutôt qu'acheter ?
          Entreprises et particuliers peuvent déjà rejoindre M-Market.
        </p>
        <Button as-child size="lg" class="font-bold">
          <a href="/contact">Nous contacter</a>
        </Button>
      </div>
    </section>

    <footer class="border-t py-6">
      <div class="container flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-muted-foreground">
        <p>© 2026 M-Market — par M-NETHUB. Tous droits réservés.</p>
        <div class="flex items-center gap-4">
          <a href="/" class="hover:text-primary transition-colors">Accueil</a>
          <router-link to="/m-market/confidentialite" class="hover:text-primary transition-colors">Confidentialité</router-link>
          <router-link to="/m-market/suppression-compte" class="hover:text-primary transition-colors">Suppression de compte</router-link>
        </div>
      </div>
    </footer>
  </div>
</template>
