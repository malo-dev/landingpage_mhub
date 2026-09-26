<script setup lang="ts">
import { useRouter } from "vue-router";
import { Button } from "@/components/ui/button";
import LogoMnethub from "@/components/LogoMnethub.vue";
import { ArrowLeft, Shield, Lock, Eye, Database, UserCheck, Paperclip, Bell, Mail, Trash2, KeyRound } from "lucide-vue-next";

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
          <Shield class="size-3.5" /> Politique de confidentialité — M-Mail
        </div>
        <h1 class="text-4xl md:text-5xl font-bold mb-4">
          Vos données sur
          <span class="text-transparent bg-gradient-to-r from-primary to-gold bg-clip-text">M-Mail</span>
        </h1>
        <p class="text-muted-foreground text-lg max-w-2xl mx-auto">
          M-Mail est un client de messagerie pour boîtes e-mail professionnelles (IMAP/SMTP), avec
          synchronisation hors-ligne. Cette page explique quelles données sont collectées, pourquoi,
          et comment vous pouvez les contrôler.
        </p>
        <p class="text-sm text-muted-foreground mt-4">
          Dernière mise à jour : <strong>Septembre 2026</strong>
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
              M-Mail est développée et maintenue par
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
                <KeyRound class="size-4 text-primary" />
                <p class="font-bold">Identifiants de connexion</p>
              </div>
              <p class="text-sm text-muted-foreground">
                Votre adresse e-mail professionnelle et le mot de passe de votre boîte (IMAP/SMTP).
                Le mot de passe est chiffré avant stockage (AES-256-GCM) — jamais conservé en clair,
                jamais consultable, même par nous.
              </p>
            </div>
            <div class="glass-panel tech-glow rounded-xl p-5">
              <div class="flex items-center gap-2 mb-2">
                <Mail class="size-4 text-primary" />
                <p class="font-bold">Contenu de vos e-mails</p>
              </div>
              <p class="text-sm text-muted-foreground">
                Objet, corps, expéditeur/destinataires de vos messages reçus et envoyés — mis en
                cache sur nos serveurs et sur votre appareil pour permettre la lecture hors-ligne.
              </p>
            </div>
            <div class="glass-panel tech-glow rounded-xl p-5">
              <div class="flex items-center gap-2 mb-2">
                <Paperclip class="size-4 text-primary" />
                <p class="font-bold">Pièces jointes</p>
              </div>
              <p class="text-sm text-muted-foreground">
                Fichiers joints à vos e-mails (images, PDF, documents — 10 Mo max par fichier),
                stockés sur nos serveurs et mis en cache localement sur votre appareil.
              </p>
            </div>
            <div class="glass-panel tech-glow rounded-xl p-5">
              <div class="flex items-center gap-2 mb-2">
                <UserCheck class="size-4 text-primary" />
                <p class="font-bold">Contacts & dossiers</p>
              </div>
              <p class="text-sm text-muted-foreground">
                Le carnet d'adresses (nom, e-mail, société, téléphone) et les dossiers personnalisés
                que vous créez dans l'application.
              </p>
            </div>
            <div class="glass-panel tech-glow rounded-xl p-5">
              <div class="flex items-center gap-2 mb-2">
                <Bell class="size-4 text-primary" />
                <p class="font-bold">Notifications</p>
              </div>
              <p class="text-sm text-muted-foreground">
                Un jeton de notification push (mobile ou navigateur) est enregistré pour vous
                prévenir de l'arrivée d'un nouveau message. Désactivable depuis les réglages.
              </p>
            </div>
            <div class="glass-panel tech-glow rounded-xl p-5">
              <div class="flex items-center gap-2 mb-2">
                <Eye class="size-4 text-primary" />
                <p class="font-bold">Appareils connectés</p>
              </div>
              <p class="text-sm text-muted-foreground">
                Pour la sécurité de votre compte : type d'appareil/navigateur, adresse IP et date de
                dernière utilisation de chaque session. Consultable et révocable à tout moment depuis
                Réglages → Sécurité.
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
              Vos e-mails ne sont ni vendus, ni partagés avec des tiers, ni analysés à des fins
              publicitaires. Ils ne sont utilisés que pour faire fonctionner M-Mail : synchroniser
              votre boîte, afficher vos messages, et vous notifier des nouveaux. Aucune régie
              publicitaire, aucun revendeur de données n'a accès à votre contenu.
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
              <p>Consultez et modifiez votre signature, vos contacts et dossiers directement dans l'application.</p>
            </div>
            <div class="glass-panel rounded-xl p-4">
              <p class="font-semibold text-foreground mb-1">Suppression</p>
              <p>
                Supprimez votre compte et toutes vos données à tout moment — voir la
                <router-link to="/m-mail/suppression-compte" class="text-primary hover:underline">page dédiée</router-link>.
              </p>
            </div>
            <div class="glass-panel rounded-xl p-4">
              <p class="font-semibold text-foreground mb-1">Opposition</p>
              <p>Désactivez les notifications push à tout moment depuis Réglages → Notifications.</p>
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
            Les communications entre l'application et nos serveurs sont chiffrées (HTTPS/TLS). Le mot
            de passe de votre boîte e-mail est chiffré (AES-256-GCM) et n'est jamais stocké ou
            consultable en clair — la connexion est vérifiée par une tentative de connexion IMAP
            réelle, pas par une simple comparaison de mot de passe en clair. L'accès à vos données
            est protégé par un jeton d'authentification à courte durée de vie, renouvelé
            automatiquement, et révocable à tout moment par appareil.
          </p>
        </section>

        <!-- Suppression -->
        <section class="glass-panel tech-glow rounded-2xl p-8">
          <div class="flex items-start gap-4">
            <div class="bg-primary/10 p-2 rounded-lg flex-shrink-0"><Trash2 class="size-5 text-primary" /></div>
            <div>
              <h2 class="text-xl font-bold mb-2">Supprimer votre compte et vos données</h2>
              <p class="text-muted-foreground text-sm mb-4">
                Vous pouvez demander la suppression définitive de votre compte M-Mail directement
                depuis l'application, ou via notre page dédiée.
              </p>
              <Button as-child>
                <router-link to="/m-mail/suppression-compte">Voir la procédure de suppression</router-link>
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
        <p>© 2026 M-Mail — par M-NETHUB. Tous droits réservés.</p>
        <div class="flex items-center gap-4">
          <a href="/" class="hover:text-primary transition-colors">Accueil</a>
          <a href="/contact" class="hover:text-primary transition-colors">Contact</a>
          <router-link to="/m-mail/suppression-compte" class="hover:text-primary transition-colors">Suppression de compte</router-link>
        </div>
      </div>
    </footer>
  </div>
</template>
