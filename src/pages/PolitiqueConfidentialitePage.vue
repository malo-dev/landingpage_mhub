<script setup lang="ts">
import { useRouter } from "vue-router";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Shield, Lock, Eye, Database, Server, UserCheck, AlertTriangle, Mail } from "lucide-vue-next";
import logoMnethub from "@/assets/logo-mnethub.svg";

const router = useRouter();
</script>

<template>
  <div class="min-h-screen bg-background">

    <!-- Top bar -->
    <div class="sticky top-0 z-40 bg-card border-b shadow-sm">
      <div class="container flex items-center justify-between py-3">
        <a href="/" class="flex items-center">
          <img :src="logoMnethub" alt="M-NETHUB" class="h-8 w-auto" />
        </a>
        <Button variant="outline" size="sm" @click="router.back()" class="gap-2">
          <ArrowLeft class="size-4" /> Retour
        </Button>
      </div>
    </div>

    <main class="container max-w-4xl py-16 px-4">

      <!-- Header -->
      <div class="text-center mb-14">
        <Badge variant="outline" class="mb-4 text-sm py-1.5 px-4">
          <Shield class="size-3.5 mr-1.5 text-primary" />
          Politique de confidentialité — Tous les produits M-NETHUB
        </Badge>
        <h1 class="text-4xl md:text-5xl font-bold mb-4">
          Protection de vos
          <span class="text-transparent bg-gradient-to-r from-primary to-[#0099BB] bg-clip-text">
            données personnelles
          </span>
        </h1>
        <p class="text-muted-foreground text-lg max-w-2xl mx-auto">
          Chez M-NETHUB, la confidentialité et la sécurité de vos données sont au cœur de chacun de nos produits.
          Cette politique s'applique à M-STORE et à tous les produits développés par M-NETHUB.
        </p>
        <p class="text-sm text-muted-foreground mt-4">
          Dernière mise à jour : <strong>Avril 2025</strong> · Entreprise : <strong>M-NETHUB SARL</strong> · Kinshasa, RDC
        </p>
      </div>

      <!-- Alert -->
      <div class="bg-primary/5 border border-primary/20 rounded-2xl p-6 mb-12 flex gap-4 items-start">
        <Lock class="size-6 text-primary flex-shrink-0 mt-0.5" />
        <div>
          <p class="font-bold text-primary mb-1">Résumé en clair</p>
          <p class="text-sm text-muted-foreground">
            Vos données appartiennent à <strong>votre commerce</strong>, pas à M-NETHUB. Nous ne les vendons jamais,
            ne les partageons jamais avec des tiers à des fins commerciales, et vous en gardez le contrôle total.
            Toutes les données sont chiffrées en transit et au repos.
          </p>
        </div>
      </div>

      <!-- Sections -->
      <div class="space-y-12">

        <!-- 1. Qui est responsable -->
        <section>
          <div class="flex items-center gap-3 mb-4">
            <div class="bg-primary/10 p-2 rounded-lg"><UserCheck class="size-5 text-primary" /></div>
            <h2 class="text-2xl font-bold">1. Responsable du traitement</h2>
          </div>
          <div class="prose prose-sm max-w-none text-muted-foreground space-y-3">
            <p>
              Le responsable du traitement des données est <strong class="text-foreground">M-NETHUB SARL</strong>,
              entreprise enregistrée en République Démocratique du Congo, dont le siège social est situé à Kinshasa.
            </p>
            <p>
              Pour toute question relative à la protection de vos données, vous pouvez nous contacter à :
              <a href="mailto:contact@m-nethub.tech" class="text-primary hover:underline">contact@m-nethub.tech</a>
            </p>
          </div>
        </section>

        <!-- 2. Données collectées dans M-STORE -->
        <section>
          <div class="flex items-center gap-3 mb-4">
            <div class="bg-primary/10 p-2 rounded-lg"><Database class="size-5 text-primary" /></div>
            <h2 class="text-2xl font-bold">2. Données collectées — M-STORE</h2>
          </div>
          <p class="text-muted-foreground mb-6">
            M-STORE est un système de gestion commerciale. Les données suivantes sont collectées et traitées
            <strong>uniquement au bénéfice de votre commerce</strong> :
          </p>
          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-muted/50 dark:bg-card border rounded-xl p-4">
              <p class="font-semibold mb-2 text-sm uppercase tracking-wide text-primary">Données du commerce</p>
              <ul class="text-sm text-muted-foreground space-y-1">
                <li>• Nom et type du commerce (boutique / organisation)</li>
                <li>• Adresse, devise, branches</li>
                <li>• Logo et informations d'affichage</li>
                <li>• Abonnement et renouvellements</li>
              </ul>
            </div>
            <div class="bg-muted/50 dark:bg-card border rounded-xl p-4">
              <p class="font-semibold mb-2 text-sm uppercase tracking-wide text-primary">Données des utilisateurs du commerce</p>
              <ul class="text-sm text-muted-foreground space-y-1">
                <li>• Nom, prénom, rôle (propriétaire, employé)</li>
                <li>• Email et mot de passe (haché — non lisible)</li>
                <li>• Historique des actions (journal d'audit)</li>
                <li>• Préférences et paramètres de compte</li>
              </ul>
            </div>
            <div class="bg-muted/50 dark:bg-card border rounded-xl p-4">
              <p class="font-semibold mb-2 text-sm uppercase tracking-wide text-primary">Données commerciales</p>
              <ul class="text-sm text-muted-foreground space-y-1">
                <li>• Produits, stocks, catégories, prix</li>
                <li>• Ventes, achats, factures, dettes</li>
                <li>• Finances, caisse, flux de trésorerie</li>
                <li>• Budgets, charges, planifications</li>
              </ul>
            </div>
            <div class="bg-muted/50 dark:bg-card border rounded-xl p-4">
              <p class="font-semibold mb-2 text-sm uppercase tracking-wide text-primary">Données clients & personnel</p>
              <ul class="text-sm text-muted-foreground space-y-1">
                <li>• Profils clients du commerce (nom, contact)</li>
                <li>• Commandes et historiques d'achat</li>
                <li>• Personnel, paie, missions, congés</li>
                <li>• Dossiers RH (gérés par le commerce)</li>
              </ul>
            </div>
          </div>
        </section>

        <!-- 3. Comment les données sont protégées -->
        <section>
          <div class="flex items-center gap-3 mb-4">
            <div class="bg-primary/10 p-2 rounded-lg"><Lock class="size-5 text-primary" /></div>
            <h2 class="text-2xl font-bold">3. Comment vos données sont protégées</h2>
          </div>
          <p class="text-muted-foreground mb-6">
            M-NETHUB met en place plusieurs couches de sécurité pour protéger vos données contre tout accès non autorisé,
            perte ou divulgation :
          </p>
          <div class="space-y-4">

            <div class="border border-primary/20 rounded-xl p-5 bg-primary/5">
              <div class="flex items-center gap-2 mb-2">
                <Shield class="size-4 text-primary" />
                <p class="font-bold">Chiffrement en transit (TLS/HTTPS)</p>
              </div>
              <p class="text-sm text-muted-foreground">
                Toutes les communications entre votre navigateur / application et nos serveurs sont chiffrées via
                <strong>TLS 1.2/1.3 (HTTPS)</strong>. Aucune donnée ne transite en clair sur le réseau.
                Vos sessions sont protégées par des tokens JWT signés avec expiration automatique.
              </p>
            </div>

            <div class="border border-primary/20 rounded-xl p-5 bg-primary/5">
              <div class="flex items-center gap-2 mb-2">
                <Database class="size-4 text-primary" />
                <p class="font-bold">Chiffrement des mots de passe (hachage bcrypt)</p>
              </div>
              <p class="text-sm text-muted-foreground">
                Les mots de passe ne sont <strong>jamais stockés en clair</strong>. Ils sont hachés avec
                <strong>bcrypt</strong> (algorithme de hachage sécurisé avec sel aléatoire) avant d'être enregistrés
                en base de données. Même l'équipe M-NETHUB ne peut pas lire votre mot de passe.
              </p>
            </div>

            <div class="border border-primary/20 rounded-xl p-5 bg-primary/5">
              <div class="flex items-center gap-2 mb-2">
                <UserCheck class="size-4 text-primary" />
                <p class="font-bold">Contrôle d'accès basé sur les rôles (RBAC)</p>
              </div>
              <p class="text-sm text-muted-foreground">
                Chaque utilisateur n'accède qu'aux données de <strong>son propre commerce</strong>.
                Un système de rôles (propriétaire, gérant, employé, auditeur) définit précisément
                ce que chaque personne peut voir ou modifier. L'isolation entre commerces est stricte :
                aucun commerce ne peut voir les données d'un autre commerce.
              </p>
            </div>

            <div class="border border-primary/20 rounded-xl p-5 bg-primary/5">
              <div class="flex items-center gap-2 mb-2">
                <Eye class="size-4 text-primary" />
                <p class="font-bold">Journal d'audit complet</p>
              </div>
              <p class="text-sm text-muted-foreground">
                Toutes les actions sensibles effectuées dans M-STORE sont enregistrées dans un
                <strong>journal d'audit</strong> (qui a fait quoi, quand, depuis quelle adresse IP).
                Vous pouvez consulter ce journal à tout moment depuis votre espace d'administration.
                Cela permet de détecter tout accès suspect immédiatement.
              </p>
            </div>

            <div class="border border-primary/20 rounded-xl p-5 bg-primary/5">
              <div class="flex items-center gap-2 mb-2">
                <Server class="size-4 text-primary" />
                <p class="font-bold">Authentification à deux facteurs (2FA)</p>
              </div>
              <p class="text-sm text-muted-foreground">
                M-STORE propose une <strong>authentification à deux facteurs</strong> pour renforcer
                la sécurité des comptes. Activez cette option depuis vos paramètres de compte pour
                exiger une confirmation supplémentaire à chaque connexion.
              </p>
            </div>

            <div class="border border-primary/20 rounded-xl p-5 bg-primary/5">
              <div class="flex items-center gap-2 mb-2">
                <Lock class="size-4 text-primary" />
                <p class="font-bold">Isolation stricte des données entre commerces</p>
              </div>
              <p class="text-sm text-muted-foreground">
                Chaque commerce dispose de son propre espace de données totalement isolé.
                Les requêtes sont filtrées au niveau du serveur par identifiant de commerce.
                Il est <strong>techniquement impossible</strong> pour un commerce d'accéder aux données
                d'un autre commerce, même en cas d'erreur de configuration.
              </p>
            </div>

            <div class="border border-primary/20 rounded-xl p-5 bg-primary/5">
              <div class="flex items-center gap-2 mb-2">
                <Server class="size-4 text-primary" />
                <p class="font-bold">Sauvegardes régulières et disponibilité</p>
              </div>
              <p class="text-sm text-muted-foreground">
                Des sauvegardes automatiques de la base de données sont effectuées régulièrement.
                Les serveurs sont surveillés 24h/24 pour assurer la disponibilité du service et
                détecter toute anomalie ou tentative d'intrusion.
              </p>
            </div>

            <div class="border border-primary/20 rounded-xl p-5 bg-primary/5">
              <div class="flex items-center gap-2 mb-2">
                <Shield class="size-4 text-primary" />
                <p class="font-bold">Protection contre les attaques web (OWASP)</p>
              </div>
              <p class="text-sm text-muted-foreground">
                L'API M-STORE est protégée contre les injections SQL, les attaques XSS, le CSRF
                et autres vecteurs d'attaque référencés par l'OWASP Top 10.
                Des en-têtes de sécurité HTTP (Helmet.js) sont appliqués sur tous les endpoints.
                Les requêtes sont soumises à un contrôle de taux (rate limiting) pour prévenir
                les abus et les attaques par force brute.
              </p>
            </div>
          </div>
        </section>

        <!-- 4. Qui accède à vos données -->
        <section>
          <div class="flex items-center gap-3 mb-4">
            <div class="bg-primary/10 p-2 rounded-lg"><Eye class="size-5 text-primary" /></div>
            <h2 class="text-2xl font-bold">4. Qui peut accéder à vos données</h2>
          </div>
          <div class="space-y-4 text-muted-foreground">
            <div class="grid md:grid-cols-3 gap-4">
              <div class="bg-green-500/10 border border-green-500/20 rounded-xl p-4 text-center">
                <p class="font-bold text-green-600 dark:text-green-400 mb-2">Vous</p>
                <p class="text-sm">Accès complet à toutes vos données depuis votre tableau de bord.</p>
              </div>
              <div class="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4 text-center">
                <p class="font-bold text-blue-600 dark:text-blue-400 mb-2">Votre équipe</p>
                <p class="text-sm">Selon les rôles définis par vous (gérant, employé, auditeur…).</p>
              </div>
              <div class="bg-red-500/10 border border-red-500/20 rounded-xl p-4 text-center">
                <p class="font-bold text-red-600 dark:text-red-400 mb-2">Tiers commerciaux</p>
                <p class="text-sm">Jamais. M-NETHUB ne vend ni ne partage vos données à des fins commerciales.</p>
              </div>
            </div>
            <p class="text-sm">
              M-NETHUB peut accéder à vos données uniquement pour des raisons de <strong>support technique</strong>
              (si vous nous y autorisez explicitement) ou d'obligation légale (sur ordre judiciaire).
              Tout accès de notre équipe est journalisé et restreint.
            </p>
          </div>
        </section>

        <!-- 5. Vos droits -->
        <section>
          <div class="flex items-center gap-3 mb-4">
            <div class="bg-primary/10 p-2 rounded-lg"><UserCheck class="size-5 text-primary" /></div>
            <h2 class="text-2xl font-bold">5. Vos droits sur vos données</h2>
          </div>
          <div class="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
            <div class="border rounded-xl p-4">
              <p class="font-semibold text-foreground mb-1">Droit d'accès</p>
              <p>Vous pouvez consulter toutes vos données depuis votre tableau de bord M-STORE à tout moment.</p>
            </div>
            <div class="border rounded-xl p-4">
              <p class="font-semibold text-foreground mb-1">Droit de rectification</p>
              <p>Vous pouvez modifier vos informations directement depuis vos paramètres de compte.</p>
            </div>
            <div class="border rounded-xl p-4">
              <p class="font-semibold text-foreground mb-1">Droit à l'effacement</p>
              <p>Vous pouvez demander la suppression de votre compte et de toutes vos données en nous contactant.</p>
            </div>
            <div class="border rounded-xl p-4">
              <p class="font-semibold text-foreground mb-1">Droit à la portabilité</p>
              <p>Vous pouvez demander un export complet de vos données dans un format structuré (JSON/CSV).</p>
            </div>
            <div class="border rounded-xl p-4">
              <p class="font-semibold text-foreground mb-1">Droit d'opposition</p>
              <p>Vous pouvez vous opposer à tout traitement non essentiel de vos données à tout moment.</p>
            </div>
            <div class="border rounded-xl p-4">
              <p class="font-semibold text-foreground mb-1">Droit à la limitation</p>
              <p>Vous pouvez demander la suspension du traitement de vos données pendant une contestation.</p>
            </div>
          </div>
        </section>

        <!-- 6. Conservation -->
        <section>
          <div class="flex items-center gap-3 mb-4">
            <div class="bg-primary/10 p-2 rounded-lg"><Database class="size-5 text-primary" /></div>
            <h2 class="text-2xl font-bold">6. Durée de conservation</h2>
          </div>
          <div class="text-muted-foreground space-y-3 text-sm">
            <p>Vos données sont conservées <strong>aussi longtemps que votre abonnement M-STORE est actif</strong>.</p>
            <p>En cas de non-renouvellement ou de résiliation :</p>
            <ul class="list-disc list-inside space-y-1 ml-4">
              <li>Vos données sont conservées pendant <strong>30 jours</strong> après expiration (pour permettre une réactivation).</li>
              <li>Passé ce délai, elles sont supprimées définitivement sauf demande de conservation légale.</li>
              <li>Les journaux d'audit sont conservés <strong>12 mois</strong> pour des raisons de traçabilité.</li>
            </ul>
          </div>
        </section>

        <!-- 7. Cookies -->
        <section>
          <div class="flex items-center gap-3 mb-4">
            <div class="bg-primary/10 p-2 rounded-lg"><Eye class="size-5 text-primary" /></div>
            <h2 class="text-2xl font-bold">7. Cookies et données de session</h2>
          </div>
          <div class="text-muted-foreground space-y-3 text-sm">
            <p>M-STORE utilise des cookies et le stockage local (localStorage) uniquement pour :</p>
            <ul class="list-disc list-inside space-y-1 ml-4">
              <li>Maintenir votre session de connexion (JWT token)</li>
              <li>Mémoriser vos préférences (langue, thème clair/sombre)</li>
              <li>Assurer le bon fonctionnement de l'application</li>
            </ul>
            <p>Aucun cookie de traçage publicitaire ou analytique tiers n'est utilisé.</p>
          </div>
        </section>

        <!-- 8. Modifications -->
        <section>
          <div class="flex items-center gap-3 mb-4">
            <div class="bg-primary/10 p-2 rounded-lg"><AlertTriangle class="size-5 text-primary" /></div>
            <h2 class="text-2xl font-bold">8. Modifications de cette politique</h2>
          </div>
          <p class="text-muted-foreground text-sm">
            M-NETHUB se réserve le droit de modifier cette politique de confidentialité à tout moment.
            En cas de modification importante, vous serez notifié par email ou via une notification
            dans l'application. La date de dernière mise à jour est toujours indiquée en haut de cette page.
            Votre utilisation continue de M-STORE après notification vaut acceptation des nouvelles conditions.
          </p>
        </section>

        <!-- Contact -->
        <section class="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-8">
          <div class="flex items-start gap-4">
            <div class="bg-primary/10 p-2 rounded-lg flex-shrink-0"><Mail class="size-5 text-primary" /></div>
            <div>
              <h2 class="text-xl font-bold mb-2">Nous contacter pour vos données</h2>
              <p class="text-muted-foreground text-sm mb-4">
                Pour toute demande relative à vos données (accès, suppression, portabilité, réclamation),
                contactez notre équipe :
              </p>
              <a href="mailto:contact@m-nethub.tech"
                class="inline-flex items-center gap-2 text-primary font-semibold hover:underline">
                <Mail class="size-4" /> contact@m-nethub.tech
              </a>
              <p class="text-xs text-muted-foreground mt-3">
                Nous nous engageons à répondre à toute demande dans un délai de <strong>72 heures ouvrables</strong>.
              </p>
            </div>
          </div>
        </section>

      </div>
    </main>

    <!-- Footer minimal -->
    <footer class="border-t py-6 mt-12">
      <div class="container flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-muted-foreground">
        <p>© 2025 M-NETHUB — Full Stack IT Company. Tous droits réservés.</p>
        <div class="flex items-center gap-4">
          <a href="/" class="hover:text-primary transition-colors">Accueil</a>
          <a href="#contact" class="hover:text-primary transition-colors">Contact</a>
          <a href="/offres" class="hover:text-primary transition-colors">M-STORE Offres</a>
        </div>
      </div>
    </footer>

  </div>
</template>
