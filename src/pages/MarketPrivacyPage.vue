<script setup lang="ts">
import { useRouter } from "vue-router";
import { Button } from "@/components/ui/button";
import LogoMnethub from "@/components/LogoMnethub.vue";
import { ArrowLeft, Shield, Lock, Eye, Database, UserCheck, MapPin, Camera, Bell, Mail, Trash2 } from "lucide-vue-next";

const router = useRouter();
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

    <main class="container max-w-4xl py-16 px-4">
      <div class="text-center mb-14">
        <div class="section-eyebrow justify-center mb-4">
          <Shield class="size-3.5" /> Politique de confidentialité — M-Market
        </div>
        <h1 class="text-4xl md:text-5xl font-bold mb-4">
          Vos données sur
          <span class="text-transparent bg-gradient-to-r from-primary to-[#0099BB] bg-clip-text">M-Market</span>
        </h1>
        <p class="text-muted-foreground text-lg max-w-2xl mx-auto">
          M-Market est une application de shopping et livraison mettant en relation des entreprises,
          des vendeurs particuliers et des acheteurs. Cette page explique quelles données sont
          collectées, pourquoi, et comment vous pouvez les contrôler.
        </p>
        <p class="text-sm text-muted-foreground mt-4">
          Dernière mise à jour : <strong>Août 2026</strong>
        </p>
      </div>

      <div class="space-y-12">
        <!-- 1. Responsable -->
        <section>
          <div class="flex items-center gap-3 mb-4">
            <div class="bg-primary/10 p-2 rounded-lg"><UserCheck class="size-5 text-primary" /></div>
            <h2 class="text-2xl font-bold">1. Responsable du traitement</h2>
          </div>
          <div class="text-muted-foreground space-y-3">
            <p>
              M-Market est développée et maintenue par
              <strong class="text-foreground">Mushio Ataulwa Leader</strong>, développeur individuel,
              sous la marque M-NETHUB.
            </p>
            <p>
              Pour toute question relative à vos données, contactez :
              <a href="mailto:contact@m-nethub.tech" class="text-primary hover:underline">contact@m-nethub.tech</a>
            </p>
          </div>
        </section>

        <!-- 2. Données collectées -->
        <section>
          <div class="flex items-center gap-3 mb-4">
            <div class="bg-primary/10 p-2 rounded-lg"><Database class="size-5 text-primary" /></div>
            <h2 class="text-2xl font-bold">2. Données collectées</h2>
          </div>
          <div class="grid gap-4 md:grid-cols-2">
            <div class="glass-panel tech-glow rounded-xl p-5">
              <div class="flex items-center gap-2 mb-2">
                <UserCheck class="size-4 text-primary" />
                <p class="font-bold">Compte</p>
              </div>
              <p class="text-sm text-muted-foreground">
                Nom complet, email, numéro de téléphone, mot de passe (haché — jamais stocké en clair).
              </p>
            </div>
            <div class="glass-panel tech-glow rounded-xl p-5">
              <div class="flex items-center gap-2 mb-2">
                <MapPin class="size-4 text-primary" />
                <p class="font-bold">Localisation (optionnelle)</p>
              </div>
              <p class="text-sm text-muted-foreground">
                Utilisée uniquement pour vous suggérer les entreprises et vendeurs les plus proches.
                Désactivable à tout moment depuis les réglages de l'app.
              </p>
            </div>
            <div class="glass-panel tech-glow rounded-xl p-5">
              <div class="flex items-center gap-2 mb-2">
                <Camera class="size-4 text-primary" />
                <p class="font-bold">Photos (recherche par image)</p>
              </div>
              <p class="text-sm text-muted-foreground">
                Une photo prise ou choisie dans votre galerie est envoyée à nos serveurs uniquement
                pour identifier un produit correspondant — elle n'est pas conservée après traitement.
              </p>
            </div>
            <div class="glass-panel tech-glow rounded-xl p-5">
              <div class="flex items-center gap-2 mb-2">
                <Bell class="size-4 text-primary" />
                <p class="font-bold">Notifications</p>
              </div>
              <p class="text-sm text-muted-foreground">
                Un identifiant de notification push est enregistré pour vous informer de l'avancement
                de vos commandes. Désactivable depuis les réglages.
              </p>
            </div>
            <div class="glass-panel tech-glow rounded-xl p-5">
              <div class="flex items-center gap-2 mb-2">
                <Database class="size-4 text-primary" />
                <p class="font-bold">Commandes & activité</p>
              </div>
              <p class="text-sm text-muted-foreground">
                Historique de commandes, liste d'envies, adresses de livraison, avis laissés sur des
                produits ou entreprises.
              </p>
            </div>
            <div class="glass-panel tech-glow rounded-xl p-5">
              <div class="flex items-center gap-2 mb-2">
                <Eye class="size-4 text-primary" />
                <p class="font-bold">Identifiant anonyme</p>
              </div>
              <p class="text-sm text-muted-foreground">
                Un identifiant d'appareil aléatoire (non lié à votre identité) permet de gérer votre
                liste d'envies et vos avis même sans compte connecté.
              </p>
            </div>
          </div>
        </section>

        <!-- 3. Ce qu'on ne fait pas -->
        <section>
          <div class="flex items-center gap-3 mb-4">
            <div class="bg-primary/10 p-2 rounded-lg"><Lock class="size-5 text-primary" /></div>
            <h2 class="text-2xl font-bold">3. Ce que nous ne faisons pas</h2>
          </div>
          <div class="glass-panel tech-glow rounded-xl p-5">
            <p class="text-sm text-muted-foreground">
              Vos données ne sont ni vendues, ni partagées avec des tiers à des fins publicitaires.
              Elles ne sont utilisées que pour faire fonctionner M-Market : afficher les entreprises et
              produits pertinents, traiter vos commandes, et vous tenir informé de leur avancement.
              Les entreprises et vendeurs particuliers présents sur M-Market voient uniquement les
              informations nécessaires pour traiter votre commande (nom, contact, adresse de livraison).
            </p>
          </div>
        </section>

        <!-- 4. Vos droits -->
        <section>
          <div class="flex items-center gap-3 mb-4">
            <div class="bg-primary/10 p-2 rounded-lg"><UserCheck class="size-5 text-primary" /></div>
            <h2 class="text-2xl font-bold">4. Vos droits</h2>
          </div>
          <div class="grid gap-4 text-sm text-muted-foreground md:grid-cols-2">
            <div class="glass-panel rounded-xl p-4">
              <p class="font-semibold text-foreground mb-1">Accès & rectification</p>
              <p>Consultez et modifiez vos informations depuis votre profil dans l'application.</p>
            </div>
            <div class="glass-panel rounded-xl p-4">
              <p class="font-semibold text-foreground mb-1">Suppression</p>
              <p>
                Supprimez votre compte et toutes vos données à tout moment — voir la
                <router-link to="/m-market/suppression-compte" class="text-primary hover:underline">page dédiée</router-link>.
              </p>
            </div>
            <div class="glass-panel rounded-xl p-4">
              <p class="font-semibold text-foreground mb-1">Opposition</p>
              <p>Désactivez la localisation ou les notifications à tout moment depuis les réglages.</p>
            </div>
            <div class="glass-panel rounded-xl p-4">
              <p class="font-semibold text-foreground mb-1">Contact direct</p>
              <p>Pour toute demande, écrivez à <a href="mailto:contact@m-nethub.tech" class="text-primary hover:underline">contact@m-nethub.tech</a>.</p>
            </div>
          </div>
        </section>

        <!-- 5. Sécurité -->
        <section>
          <div class="flex items-center gap-3 mb-4">
            <div class="bg-primary/10 p-2 rounded-lg"><Shield class="size-5 text-primary" /></div>
            <h2 class="text-2xl font-bold">5. Sécurité</h2>
          </div>
          <p class="text-sm text-muted-foreground">
            Les communications entre l'application et nos serveurs sont chiffrées (HTTPS/TLS). Les mots
            de passe sont hachés et ne sont jamais stockés ou consultables en clair. L'accès à vos
            données est protégé par authentification (token) avec expiration automatique.
          </p>
        </section>

        <!-- Suppression -->
        <section class="glass-panel tech-glow rounded-2xl p-8">
          <div class="flex items-start gap-4">
            <div class="bg-primary/10 p-2 rounded-lg flex-shrink-0"><Trash2 class="size-5 text-primary" /></div>
            <div>
              <h2 class="text-xl font-bold mb-2">Supprimer votre compte et vos données</h2>
              <p class="text-muted-foreground text-sm mb-4">
                Vous pouvez demander la suppression définitive de votre compte M-Market directement
                depuis l'application, ou via notre page dédiée.
              </p>
              <Button as-child>
                <router-link to="/m-market/suppression-compte">Voir la procédure de suppression</router-link>
              </Button>
            </div>
          </div>
        </section>

        <!-- Contact -->
        <section class="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-8">
          <div class="flex items-start gap-4">
            <div class="bg-primary/10 p-2 rounded-lg flex-shrink-0"><Mail class="size-5 text-primary" /></div>
            <div>
              <h2 class="text-xl font-bold mb-2">Nous contacter</h2>
              <a href="mailto:contact@m-nethub.tech" class="inline-flex items-center gap-2 text-primary font-semibold hover:underline">
                <Mail class="size-4" /> contact@m-nethub.tech
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>

    <footer class="border-t py-6 mt-12">
      <div class="container flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-muted-foreground">
        <p>© 2026 M-Market — par M-NETHUB. Tous droits réservés.</p>
        <div class="flex items-center gap-4">
          <a href="/" class="hover:text-primary transition-colors">Accueil</a>
          <a href="/contact" class="hover:text-primary transition-colors">Contact</a>
          <router-link to="/m-market/suppression-compte" class="hover:text-primary transition-colors">Suppression de compte</router-link>
        </div>
      </div>
    </footer>
  </div>
</template>
