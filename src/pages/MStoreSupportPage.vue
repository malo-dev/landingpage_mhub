<script setup lang="ts">
// Support M-STORE — URL d'assistance exigée par l'App Store.
import { useRouter } from "vue-router";
import { Button } from "@/components/ui/button";
import LogoMnethub from "@/components/LogoMnethub.vue";
import { ArrowLeft, LifeBuoy, Mail, MessageCircle, HelpCircle, Trash2, Shield } from "lucide-vue-next";

const router = useRouter();
const faq = [
  { q: "Comment me connecter ?", a: "Entrez l'e-mail de votre compte : l'application détecte votre espace (commerce, employé, chauffeur, vendeur) et vous y dirige. Si plusieurs espaces existent, choisissez-le dans la liste." },
  { q: "J'ai oublié mon mot de passe ou mon code d'accès", a: "Sur l'écran de connexion, touchez « Mot de passe oublié » ou « Code oublié » : un nouveau code vous est envoyé par e-mail." },
  { q: "L'application fonctionne-t-elle sans internet ?", a: "Oui. Les données déjà ouvertes restent consultables et vos actions (ventes, pointages, livraisons…) sont mises en attente puis envoyées automatiquement au retour du réseau." },
  { q: "Pourquoi l'app demande-t-elle ma position en arrière-plan ?", a: "Uniquement dans l'espace chauffeur, pendant une tournée de livraison que vous avez démarrée, pour que votre organisation suive le véhicule. Le suivi s'arrête à la fin de la tournée. Vous pouvez refuser : le suivi fonctionnera alors seulement app ouverte." },
  { q: "Comment créer un espace pour mon commerce, mon ONG ou mon école ?", a: "Inscrivez-vous gratuitement sur m-nethub.tech/creer-commerce. Après validation, vous recevez par e-mail le lien d'activation de votre abonnement." },
  { q: "Mon abonnement a expiré", a: "Renouvelez-le sur m-nethub.tech/reabonnement avec l'e-mail de votre commerce." },
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
        <div class="section-eyebrow justify-center mb-4"><LifeBuoy class="size-3.5" /> Aide & support — M-STORE</div>
        <h1 class="text-4xl md:text-5xl font-bold mb-4">Comment pouvons-nous <span class="text-transparent bg-gradient-to-r from-primary to-gold bg-clip-text">vous aider ?</span></h1>
        <p class="text-muted-foreground text-lg max-w-2xl mx-auto">Notre équipe répond en français et en anglais, sous 72 heures ouvrables au plus tard.</p>
      </div>

      <div class="grid gap-4 md:grid-cols-2 mb-12">
        <a href="mailto:contact@m-nethub.tech?subject=Support%20M-STORE" class="glass-panel tech-glow rounded-2xl p-6 transition-transform hover:-translate-y-0.5">
          <div class="bg-primary/10 p-2 rounded-lg w-fit mb-3"><Mail class="size-5 text-primary" /></div>
          <h2 class="text-lg font-bold">Écrire au support</h2>
          <p class="text-sm text-muted-foreground mt-1">contact@m-nethub.tech</p>
        </a>
        <router-link to="/contact" class="glass-panel tech-glow rounded-2xl p-6 transition-transform hover:-translate-y-0.5">
          <div class="bg-primary/10 p-2 rounded-lg w-fit mb-3"><MessageCircle class="size-5 text-primary" /></div>
          <h2 class="text-lg font-bold">Formulaire de contact</h2>
          <p class="text-sm text-muted-foreground mt-1">Décrivez votre problème, nous vous rappelons.</p>
        </router-link>
      </div>
      <p class="text-sm text-muted-foreground mb-12 text-center">
        Déjà connecté ? Ouvrez <strong class="text-foreground">Plus → Support</strong> dans l'application pour créer un ticket suivi par notre équipe.
      </p>

      <section>
        <h2 class="text-2xl font-bold mb-5 flex items-center gap-2"><HelpCircle class="size-6 text-primary" /> Questions fréquentes</h2>
        <div class="space-y-3">
          <details v-for="f in faq" :key="f.q" class="glass-panel rounded-xl p-5 group">
            <summary class="cursor-pointer font-semibold list-none flex justify-between gap-4">{{ f.q }} <span class="text-primary group-open:rotate-45 transition-transform">+</span></summary>
            <p class="text-sm text-muted-foreground mt-3 leading-relaxed">{{ f.a }}</p>
          </details>
        </div>
      </section>

      <div class="grid gap-4 md:grid-cols-2 mt-12">
        <router-link to="/m-store/confidentialite" class="glass-panel rounded-xl p-5 flex items-center gap-3 hover:text-primary"><Shield class="size-5 text-primary" /> Politique de confidentialité</router-link>
        <router-link to="/m-store/suppression-compte" class="glass-panel rounded-xl p-5 flex items-center gap-3 hover:text-primary"><Trash2 class="size-5 text-primary" /> Supprimer mon compte</router-link>
      </div>
    </main>

    <footer class="border-t py-6 mt-12">
      <div class="container flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-muted-foreground">
        <p>© 2026 M-STORE — par M-NETHUB. Tous droits réservés.</p>
        <div class="flex items-center gap-4">
          <router-link to="/m-store" class="hover:text-primary">M-STORE</router-link>
          <a href="/" class="hover:text-primary">Accueil</a>
        </div>
      </div>
    </footer>
  </div>
</template>
