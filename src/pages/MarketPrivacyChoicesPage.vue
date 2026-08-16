<script setup lang="ts">
import { useRouter } from "vue-router";
import { Button } from "@/components/ui/button";
import LogoMnethub from "@/components/LogoMnethub.vue";
import { ArrowLeft, SlidersHorizontal, MapPin, Bell, Trash2, Download, Ban, Mail } from "lucide-vue-next";

const router = useRouter();
</script>

<template>
  <div class="relative min-h-screen overflow-hidden bg-background">
    <div class="grid-bg pointer-events-none absolute inset-0 -z-10 opacity-40" />

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

    <main class="container max-w-3xl py-16 px-4">
      <div class="text-center mb-12">
        <div class="section-eyebrow justify-center mb-4">
          <SlidersHorizontal class="size-3.5" /> Choix de confidentialité — M-Market
        </div>
        <h1 class="text-4xl md:text-5xl font-bold mb-4">
          Vous gardez
          <span class="text-transparent bg-gradient-to-r from-primary to-[#0099BB] bg-clip-text"> le contrôle</span>
        </h1>
        <p class="text-muted-foreground text-lg max-w-2xl mx-auto">
          M-Market ne vend ni ne partage vos données personnelles avec des tiers à des fins
          publicitaires — il n'y a donc pas de mécanisme "ne pas vendre mes données" à activer.
          Voici en revanche les choix réels dont vous disposez.
        </p>
      </div>

      <div class="grid gap-4 sm:grid-cols-2">
        <div class="glass-panel tech-glow rounded-xl p-5">
          <div class="flex items-center gap-2 mb-2">
            <MapPin class="size-4 text-primary" />
            <p class="font-bold">Localisation</p>
          </div>
          <p class="text-sm text-muted-foreground">
            Désactivable à tout moment depuis <strong class="text-foreground">Réglages → Localisation</strong>
            dans l'application, ou depuis les réglages système de votre téléphone.
          </p>
        </div>

        <div class="glass-panel tech-glow rounded-xl p-5">
          <div class="flex items-center gap-2 mb-2">
            <Bell class="size-4 text-primary" />
            <p class="font-bold">Notifications</p>
          </div>
          <p class="text-sm text-muted-foreground">
            Désactivables depuis <strong class="text-foreground">Réglages → Notifications</strong> dans
            l'app, ou depuis les réglages système.
          </p>
        </div>

        <div class="glass-panel tech-glow rounded-xl p-5">
          <div class="flex items-center gap-2 mb-2">
            <Download class="size-4 text-primary" />
            <p class="font-bold">Export de vos données</p>
          </div>
          <p class="text-sm text-muted-foreground">
            Demandez une copie de vos données personnelles par email — nous vous répondons sous
            72 heures ouvrables.
          </p>
        </div>

        <div class="glass-panel tech-glow rounded-xl p-5">
          <div class="flex items-center gap-2 mb-2">
            <Trash2 class="size-4 text-primary" />
            <p class="font-bold">Suppression du compte</p>
          </div>
          <p class="text-sm text-muted-foreground">
            Supprimez votre compte et vos données à tout moment — voir la
            <router-link to="/m-market/suppression-compte" class="text-primary hover:underline">procédure dédiée</router-link>.
          </p>
        </div>
      </div>

      <div class="glass-panel tech-glow rounded-2xl p-6 mt-6 flex gap-3 items-start">
        <Ban class="size-5 text-primary flex-shrink-0 mt-0.5" />
        <p class="text-sm text-muted-foreground">
          <strong class="text-foreground">Aucune vente ni partage publicitaire.</strong>
          M-Market n'intègre aucun SDK publicitaire ni outil de suivi tiers. Vos données ne
          servent qu'au fonctionnement de l'application : afficher les entreprises et produits
          pertinents, traiter vos commandes, et vous tenir informé de leur avancement.
        </p>
      </div>

      <!-- Contact -->
      <section class="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-8 mt-8">
        <div class="flex items-start gap-4">
          <div class="bg-primary/10 p-2 rounded-lg flex-shrink-0"><Mail class="size-5 text-primary" /></div>
          <div>
            <h2 class="text-xl font-bold mb-2">Une question sur vos données ?</h2>
            <a href="mailto:contact@m-nethub.tech" class="inline-flex items-center gap-2 text-primary font-semibold hover:underline">
              <Mail class="size-4" /> contact@m-nethub.tech
            </a>
          </div>
        </div>
      </section>
    </main>

    <footer class="border-t py-6 mt-4">
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
