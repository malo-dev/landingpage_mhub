<script setup lang="ts">
// Suppression de compte M-STORE — URL exigée par Google Play (et utile pour l'App Store).
import { useRouter } from "vue-router";
import { Button } from "@/components/ui/button";
import LogoMnethub from "@/components/LogoMnethub.vue";
import { ArrowLeft, Trash2, Smartphone, Mail, AlertTriangle, CheckCircle2 } from "lucide-vue-next";

const router = useRouter();
const deleted = [
  "Profil (nom, e-mail, téléphone, photo)",
  "Identifiants de connexion et sessions",
  "Préférences et paramètres du compte",
  "Identifiant de notification push",
];
</script>

<template>
  <div class="relative min-h-screen overflow-hidden bg-background">
    <div class="grid-bg pointer-events-none absolute inset-0 -z-10 opacity-40" />
    <div class="glass-panel sticky top-0 z-40">
      <div class="container flex items-center justify-between py-3">
        <a href="/" class="flex items-center"><LogoMnethub variant="horizontal" class="text-foreground" icon-class="h-8 w-8" text-class="text-base" /></a>
        <Button variant="outline" size="sm" @click="router.back()" class="gap-2"><ArrowLeft class="size-4" /> Retour</Button>
      </div>
    </div>

    <main class="container max-w-3xl py-16 px-4">
      <div class="text-center mb-12">
        <div class="section-eyebrow justify-center mb-4"><Trash2 class="size-3.5" /> Suppression de compte — M-STORE</div>
        <h1 class="text-4xl md:text-5xl font-bold mb-4">
          Supprimer votre compte <span class="text-transparent bg-gradient-to-r from-primary to-gold bg-clip-text">M-STORE</span>
        </h1>
        <p class="text-muted-foreground text-lg max-w-2xl mx-auto">
          Vous pouvez demander la suppression définitive de votre compte à tout moment, que l'application soit encore installée ou non.
        </p>
      </div>

      <div class="space-y-8">
        <section class="glass-panel tech-glow rounded-2xl p-6">
          <div class="flex items-center gap-3 mb-3">
            <div class="bg-primary/10 p-2 rounded-lg"><Smartphone class="size-5 text-primary" /></div>
            <h2 class="text-xl font-bold">Depuis l'application (recommandé)</h2>
          </div>
          <ol class="text-sm text-muted-foreground space-y-2 list-decimal list-inside">
            <li>Ouvrez M-STORE et connectez-vous</li>
            <li>Ouvrez <strong class="text-foreground">Profil</strong>, puis l'icône <strong class="text-foreground">Paramètres</strong> (roue dentée)</li>
            <li>Appuyez sur <strong class="text-foreground">Supprimer mon compte</strong>, puis confirmez</li>
          </ol>
          <p class="text-sm text-muted-foreground mt-3">La suppression est <strong>immédiate et définitive</strong>.</p>
        </section>

        <section class="glass-panel tech-glow rounded-2xl p-6">
          <div class="flex items-center gap-3 mb-3">
            <div class="bg-primary/10 p-2 rounded-lg"><Mail class="size-5 text-primary" /></div>
            <h2 class="text-xl font-bold">Sans l'application</h2>
          </div>
          <p class="text-sm text-muted-foreground mb-3">
            Envoyez une demande depuis l'adresse e-mail de votre compte M-STORE (employés, chauffeurs et vendeurs : indiquez aussi le nom de votre organisation) :
          </p>
          <a href="mailto:contact@m-nethub.tech?subject=Suppression%20de%20compte%20M-STORE" class="inline-flex items-center gap-2 text-primary font-semibold hover:underline">
            <Mail class="size-4" /> contact@m-nethub.tech
          </a>
          <p class="text-sm text-muted-foreground mt-3">Votre demande est traitée sous <strong class="text-foreground">72 heures ouvrables</strong>.</p>
        </section>

        <section>
          <h2 class="text-xl font-bold mb-4">Ce qui est supprimé</h2>
          <div class="grid gap-3 md:grid-cols-2">
            <div v-for="d in deleted" :key="d" class="flex items-start gap-2 text-sm text-muted-foreground">
              <CheckCircle2 class="size-4 text-primary flex-shrink-0 mt-0.5" /> {{ d }}
            </div>
          </div>
          <div class="glass-panel rounded-xl p-5 mt-4 flex gap-3 items-start">
            <AlertTriangle class="size-5 text-amber-500 flex-shrink-0 mt-0.5" />
            <p class="text-sm text-muted-foreground">
              <strong class="text-foreground">Données de l'organisation :</strong> les ventes, factures, écritures comptables et dossiers RH
              appartiennent au commerce, à l'ONG ou à l'école qui les a saisis ; ils sont conservés selon ses obligations légales,
              puis supprimés 30 jours après la fin de son abonnement. Les journaux d'audit sont conservés 12 mois.
            </p>
          </div>
        </section>
      </div>
    </main>

    <footer class="border-t py-6 mt-12">
      <div class="container flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-muted-foreground">
        <p>© 2026 M-STORE — par M-NETHUB. Tous droits réservés.</p>
        <div class="flex items-center gap-4">
          <router-link to="/m-store" class="hover:text-primary">M-STORE</router-link>
          <router-link to="/m-store/confidentialite" class="hover:text-primary">Confidentialité</router-link>
        </div>
      </div>
    </footer>
  </div>
</template>
