<script setup lang="ts">
import { useRouter } from "vue-router";
import { Button } from "@/components/ui/button";
import LogoMnethub from "@/components/LogoMnethub.vue";
import { ArrowLeft, Trash2, Smartphone, Mail, AlertTriangle, CheckCircle2 } from "lucide-vue-next";

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
          <Trash2 class="size-3.5" /> Suppression de compte — M-Market
        </div>
        <h1 class="text-4xl md:text-5xl font-bold mb-4">
          Supprimer votre compte
          <span class="text-transparent bg-gradient-to-r from-primary to-[#0099BB] bg-clip-text"> M-Market</span>
        </h1>
        <p class="text-muted-foreground text-lg max-w-2xl mx-auto">
          Vous pouvez demander la suppression définitive de votre compte et de vos données à tout
          moment, que vous ayez encore l'application installée ou non.
        </p>
      </div>

      <div class="space-y-8">
        <!-- Option 1 : depuis l'app -->
        <section class="glass-panel tech-glow rounded-2xl p-6">
          <div class="flex items-center gap-3 mb-3">
            <div class="bg-primary/10 p-2 rounded-lg"><Smartphone class="size-5 text-primary" /></div>
            <h2 class="text-xl font-bold">Depuis l'application (recommandé)</h2>
          </div>
          <ol class="text-sm text-muted-foreground space-y-2 list-decimal list-inside">
            <li>Ouvrez M-Market et connectez-vous à votre compte</li>
            <li>Allez dans <strong class="text-foreground">Profil → Réglages</strong></li>
            <li>Descendez jusqu'à la section <strong class="text-foreground">Zone dangereuse</strong></li>
            <li>Appuyez sur <strong class="text-foreground">Supprimer mon compte</strong>, puis confirmez</li>
          </ol>
          <p class="text-sm text-muted-foreground mt-3">
            La suppression est <strong>immédiate et définitive</strong>.
          </p>
        </section>

        <!-- Option 2 : sans l'app -->
        <section class="glass-panel tech-glow rounded-2xl p-6">
          <div class="flex items-center gap-3 mb-3">
            <div class="bg-primary/10 p-2 rounded-lg"><Mail class="size-5 text-primary" /></div>
            <h2 class="text-xl font-bold">Sans l'application</h2>
          </div>
          <p class="text-sm text-muted-foreground mb-3">
            Si vous n'avez plus l'application installée, envoyez une demande de suppression à
            l'adresse ci-dessous, depuis l'email associé à votre compte M-Market :
          </p>
          <a
            href="mailto:contact@m-nethub.tech?subject=Suppression%20de%20compte%20M-Market"
            class="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
          >
            <Mail class="size-4" /> contact@m-nethub.tech
          </a>
          <p class="text-sm text-muted-foreground mt-3">
            Votre demande sera traitée sous <strong class="text-foreground">72 heures ouvrables</strong>.
          </p>
        </section>

        <!-- Ce qui est supprimé -->
        <section>
          <h2 class="text-xl font-bold mb-4">Ce qui est supprimé</h2>
          <div class="grid gap-3 md:grid-cols-2">
            <div class="flex items-start gap-2 text-sm text-muted-foreground">
              <CheckCircle2 class="size-4 text-primary flex-shrink-0 mt-0.5" />
              Informations de profil (nom, email, téléphone)
            </div>
            <div class="flex items-start gap-2 text-sm text-muted-foreground">
              <CheckCircle2 class="size-4 text-primary flex-shrink-0 mt-0.5" />
              Adresses de livraison enregistrées
            </div>
            <div class="flex items-start gap-2 text-sm text-muted-foreground">
              <CheckCircle2 class="size-4 text-primary flex-shrink-0 mt-0.5" />
              Liste d'envies et avis laissés
            </div>
            <div class="flex items-start gap-2 text-sm text-muted-foreground">
              <CheckCircle2 class="size-4 text-primary flex-shrink-0 mt-0.5" />
              Identifiant de notification push
            </div>
          </div>

          <div class="glass-panel rounded-xl p-5 mt-4 flex gap-3 items-start">
            <AlertTriangle class="size-5 text-amber-500 flex-shrink-0 mt-0.5" />
            <p class="text-sm text-muted-foreground">
              <strong class="text-foreground">Exception légale :</strong> l'historique de vos commandes
              passées peut être conservé au-delà de la suppression du compte, dans la mesure requise
              par les obligations comptables et fiscales des entreprises et vendeurs concernés — les
              données sont alors dissociées de votre profil personnel.
            </p>
          </div>
        </section>
      </div>
    </main>

    <footer class="border-t py-6 mt-12">
      <div class="container flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-muted-foreground">
        <p>© 2026 M-Market — par M-NETHUB. Tous droits réservés.</p>
        <div class="flex items-center gap-4">
          <a href="/" class="hover:text-primary transition-colors">Accueil</a>
          <router-link to="/m-market/confidentialite" class="hover:text-primary transition-colors">Confidentialité</router-link>
        </div>
      </div>
    </footer>
  </div>
</template>
