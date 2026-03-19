<script setup lang="ts">
import { ref } from "vue";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Check, Store, Building2 } from "lucide-vue-next";

const activeTab = ref<"commercial" | "ong">("commercial");

interface FeatureCategory {
  icon: string;
  title: string;
  count: number;
  items: string[];
}

const commercialCategories: FeatureCategory[] = [
  {
    icon: "📦",
    title: "Gestion du stock & produits",
    count: 9,
    items: [
      "Ajout, modification et suppression de produits",
      "Gestion des quantités en temps réel",
      "Statut automatique : Disponible / Out of stock",
      "Catégorisation des produits par famille",
      "Upload d'image pour chaque produit",
      "Gestion multi-devises (USD, CDF, EUR…)",
      "Historique complet des changements de prix",
      "Personnalisation des champs du stock",
      "Décrement automatique du stock lors des ventes, expéditions ou dettes",
    ],
  },
  {
    icon: "🧾",
    title: "Ventes & Point de vente (POS)",
    count: 7,
    items: [
      "Enregistrement des ventes produit par produit",
      "Interface caisse (POS) pour ventes rapides en magasin",
      "Calcul automatique du total (quantité × prix)",
      "Mise à jour du stock en temps réel à chaque vente",
      "Historique paginé des ventes avec filtres",
      "Filtrage par période : jour / semaine / mois / trimestre / an",
      "Export Excel des ventes",
    ],
  },
  {
    icon: "🛒",
    title: "Commandes clients",
    count: 6,
    items: [
      "Création de commandes multi-articles",
      "Association d'un client à chaque commande",
      "Suivi du statut : En attente → Confirmée → Livrée / Annulée",
      "Calcul automatique du total de la commande",
      "Historique des commandes par client",
      "Boutique publique en ligne pour les clients (sans connexion)",
    ],
  },
  {
    icon: "💳",
    title: "Dettes & Crédit clients",
    count: 8,
    items: [
      "Enregistrement des ventes à crédit (dettes clients)",
      "Paiements partiels successifs enregistrables",
      "Statut automatique : En attente / Partiel / Payé",
      "Décrement du stock si le produit est issu du stock",
      "Historique complet des paiements par dette",
      "Vue groupée par commerce et extension",
      "Filtrage par statut et recherche par client ou produit",
      "Affichage du montant total, payé et restant",
    ],
  },
  {
    icon: "🚚",
    title: "Expéditions & Logistique",
    count: 7,
    items: [
      "Expéditions externes : envois vers des destinations clientes",
      "Expéditions internes : transferts de stock entre branches",
      "Décrement automatique du stock pour les expéditions internes",
      "Suivi du statut : En attente → En transit → Livré / Annulé",
      "Gestion du transporteur, plaque d'immatriculation et chauffeur",
      "Numéro de référence automatique",
      "Dates de départ et d'arrivée prévue",
    ],
  },
  {
    icon: "💰",
    title: "Finances & Trésorerie",
    count: 8,
    items: [
      "Enregistrement des charges (dépenses, factures, achats)",
      "Suivi des flux de trésorerie : entrées et sorties",
      "Solde de trésorerie calculé en temps réel",
      "Suivi des redevances (loyers, commissions, revenus récurrents)",
      "Planification et suivi des budgets par période",
      "Tableau Profits & Pertes : Revenus − Charges = Bénéfice net",
      "Graphiques d'évolution du chiffre d'affaires",
      "Filtrage et analyse par période",
    ],
  },
  {
    icon: "🏪",
    title: "Commerces & Extensions",
    count: 7,
    items: [
      "Gestion de plusieurs commerces depuis un seul compte",
      "Création d'extensions (branches / points de vente) par commerce",
      "Upload du logo du commerce",
      "Types de commerce : Magasin ou Organisation",
      "Sélecteur commerce / extension pour filtrer toutes les données",
      "Vitrine publique par commerce accessible aux clients sans connexion",
      "Offres d'emploi publiques par commerce",
    ],
  },
  {
    icon: "👥",
    title: "Ressources humaines & Personnel",
    count: 8,
    items: [
      "Fiches complètes du personnel",
      "Gestion des présences et absences (pointage)",
      "Gestion des salaires et avances",
      "Suivi des loyers de logement du personnel",
      "Organisation par départements",
      "Assignation de membres aux départements",
      "Publication et gestion des offres d'emploi",
      "Réception et gestion des candidatures",
    ],
  },
  {
    icon: "🔐",
    title: "Utilisateurs, Rôles & Accès",
    count: 8,
    items: [
      "Gestion des comptes utilisateurs",
      "Création de rôles personnalisés (Admin, Manager, Caissier…)",
      "Profils d'accès regroupant plusieurs rôles",
      "Attribution de profils par utilisateur",
      "Contrôle d'accès granulaire par fonctionnalité",
      "Double authentification (2FA)",
      "Changement de mot de passe sécurisé",
      "Journal d'audit complet de toutes les actions",
    ],
  },
  {
    icon: "🤝",
    title: "Clients & Relation client",
    count: 5,
    items: [
      "Base de données des clients avec nom, téléphone et adresse",
      "Historique des achats et dettes par client",
      "Collecte et suivi des feedbacks clients",
      "Système de tickets de support avec fil de discussion",
      "Statuts des tickets : Ouvert / En cours / Résolu",
    ],
  },
  {
    icon: "🔔",
    title: "Notifications & Alertes",
    count: 5,
    items: [
      "Notifications automatiques (stock faible, expédition livrée, commande reçue…)",
      "Centre de notifications avec compteur de non-lus",
      "Marquage lu / non lu",
      "Alertes système configurables (seuils de stock faible, etc.)",
      "Historique complet des notifications",
    ],
  },
  {
    icon: "📊",
    title: "Tableau de bord & Analytique",
    count: 7,
    items: [
      "Tableau de bord avec indicateurs clés (KPI) en temps réel",
      "Résumé des ventes du jour, de la semaine, du mois",
      "Graphiques d'évolution du chiffre d'affaires",
      "Résumé des dettes clients en attente",
      "Alertes de stock faible visibles dès l'accueil",
      "Prévisions et tâches de planification",
      "Analyse Profits & Pertes par période",
    ],
  },
];

const ongCategories: FeatureCategory[] = [
  {
    icon: "📦",
    title: "Gestion du stock interne",
    count: 6,
    items: [
      "Entrées : achats, dons, approvisionnements",
      "Sorties : distributions aux bénéficiaires, usage interne",
      "Transferts entre départements",
      "Catégories : Logistique, Matériel, Médical, Fournitures…",
      "Historique complet avec traçabilité",
      "Stock en temps réel, alertes de rupture",
    ],
  },
  {
    icon: "💰",
    title: "Gestion financière",
    count: 7,
    items: [
      "Salaires, primes, indemnités du personnel",
      "Charges fixes : loyers, eau, électricité, internet",
      "Logistique : transport, carburant, maintenance",
      "Missions terrain : per diem, hébergement, restauration",
      "Upload de pièces justificatives",
      "Tableau de bord des dépenses par catégorie",
      "Achat stock = dépense enregistrée automatiquement",
    ],
  },
  {
    icon: "👨‍💼",
    title: "Ressources humaines",
    count: 7,
    items: [
      "Fiches employés : poste, département, contrat, salaire",
      "Paiement mensuel des salaires avec historique",
      "Gestion des missions : titre, lieu, dates, agents assignés",
      "Per diem, transport et hébergement par mission",
      "Chaque mission = centre de coût lié à la finance",
      "Suivi des disponibilités et agents en terrain",
      "Documents : contrats, fiches de paie (optionnel)",
    ],
  },
  {
    icon: "📢",
    title: "Opportunités & Appels d'offres",
    count: 8,
    items: [
      "Publication : Appels d'offres, Appels à projets, AMI",
      "Formulaire de candidature personnalisé par appel",
      "Champs dynamiques : texte, choix multiple, upload, date…",
      "Documents requis : CV, registre, proposition technique/financière",
      "Matching intelligent automatique avec les commerces",
      "Notifications email + interne aux commerces ciblés",
      "Analyse et comparaison des candidatures reçues",
      "Acceptation / refus avec justification",
    ],
  },
  {
    icon: "💬",
    title: "Chat & Communication",
    count: 4,
    items: [
      "Messagerie temps réel entre commerces et organisations",
      "Chat lié directement à un appel d'offres",
      "Historique des échanges conservé",
      "Notifications de nouveaux messages",
    ],
  },
];

const expandedCategories = ref<Set<string>>(new Set());

const toggleCategory = (title: string) => {
  if (expandedCategories.value.has(title)) {
    expandedCategories.value.delete(title);
  } else {
    expandedCategories.value.add(title);
  }
};
</script>

<template>
  <section id="pricing" class="container py-24 sm:py-32">
    <div class="text-center mb-12">
      <h2 class="text-lg text-primary text-center mb-2 tracking-wider">Tarification</h2>
      <h2 class="text-3xl md:text-4xl text-center font-bold mb-4">
        M-STORE — Choisissez votre formule
      </h2>
      <p class="md:w-2/3 mx-auto text-xl text-muted-foreground">
        M-STORE s'adapte à deux types d'organisations — commerces et entreprises d'un côté,
        ONG et institutions de l'autre.
      </p>
    </div>

    <!-- Tab Switcher -->
    <div class="flex justify-center mb-12">
      <div class="flex bg-muted rounded-xl p-1 gap-1">
        <button
          @click="activeTab = 'commercial'"
          :class="[
            'flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all text-sm',
            activeTab === 'commercial'
              ? 'bg-primary text-primary-foreground shadow-md'
              : 'text-muted-foreground hover:text-foreground',
          ]"
        >
          <Store class="size-4" />
          Commercial
        </button>
        <button
          @click="activeTab = 'ong'"
          :class="[
            'flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all text-sm',
            activeTab === 'ong'
              ? 'bg-primary text-primary-foreground shadow-md'
              : 'text-muted-foreground hover:text-foreground',
          ]"
        >
          <Building2 class="size-4" />
          ONG / Organisation
        </button>
      </div>
    </div>

    <!-- Commercial Plan -->
    <div v-if="activeTab === 'commercial'">
      <div class="grid lg:grid-cols-3 gap-8 mb-12 items-start">
        <div class="lg:col-span-1">
          <Card class="border-2 border-primary shadow-lg shadow-primary/20 sticky top-24">
            <CardHeader>
              <Badge class="w-fit mb-2">Commerces & PME</Badge>
              <CardTitle class="text-3xl font-extrabold">$2
                <span class="text-lg font-normal text-muted-foreground">/mois</span>
              </CardTitle>
              <CardDescription class="text-base">
                Accès complet à toutes les fonctionnalités M-STORE pour votre commerce.
              </CardDescription>
            </CardHeader>
            <CardContent class="space-y-3">
              <div class="flex items-center gap-2">
                <Check class="text-primary size-4 flex-shrink-0" />
                <span>29 modules inclus</span>
              </div>
              <div class="flex items-center gap-2">
                <Check class="text-primary size-4 flex-shrink-0" />
                <span>92 fonctionnalités</span>
              </div>
              <div class="flex items-center gap-2">
                <Check class="text-primary size-4 flex-shrink-0" />
                <span>Multi-commerces & branches</span>
              </div>
              <div class="flex items-center gap-2">
                <Check class="text-primary size-4 flex-shrink-0" />
                <span>Boutique publique en ligne</span>
              </div>
              <div class="flex items-center gap-2">
                <Check class="text-primary size-4 flex-shrink-0" />
                <span>Support technique inclus</span>
              </div>
              <div class="flex items-center gap-2">
                <Check class="text-primary size-4 flex-shrink-0" />
                <span>Mises à jour régulières</span>
              </div>
            </CardContent>
            <CardFooter class="flex flex-col gap-3">
              <Button class="w-full font-bold" as-child>
                <a href="#contact">Commencer maintenant</a>
              </Button>
              <Button variant="outline" class="w-full" as-child>
                <a href="#devis">Demander un devis</a>
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div class="lg:col-span-2 space-y-4">
          <h3 class="text-xl font-bold mb-4">
            <span class="text-primary">92 fonctionnalités</span> — 12 catégories complètes
          </h3>
          <div
            v-for="cat in commercialCategories"
            :key="cat.title"
            class="border rounded-xl overflow-hidden"
          >
            <button
              @click="toggleCategory(cat.title)"
              class="w-full flex items-center justify-between p-4 hover:bg-muted/50 transition-colors text-left"
            >
              <div class="flex items-center gap-3">
                <span class="text-2xl">{{ cat.icon }}</span>
                <span class="font-semibold">{{ cat.title }}</span>
                <Badge variant="secondary">{{ cat.count }}</Badge>
              </div>
              <span class="text-muted-foreground text-lg">
                {{ expandedCategories.has(cat.title) ? '−' : '+' }}
              </span>
            </button>
            <div v-if="expandedCategories.has(cat.title)" class="px-4 pb-4 pt-0">
              <ul class="space-y-2">
                <li
                  v-for="item in cat.items"
                  :key="item"
                  class="flex items-start gap-2 text-muted-foreground text-sm"
                >
                  <Check class="text-primary size-4 flex-shrink-0 mt-0.5" />
                  {{ item }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ONG / Organisation Plan -->
    <div v-if="activeTab === 'ong'">
      <div class="grid lg:grid-cols-3 gap-8 items-start">
        <div class="lg:col-span-1">
          <Card class="border-2 border-primary/50 sticky top-24">
            <CardHeader>
              <Badge variant="outline" class="w-fit mb-2 border-primary text-primary">ONG & Institutions</Badge>
              <div class="flex items-center gap-2 mb-1">
                <Badge class="bg-amber-500/20 text-amber-600 dark:text-amber-400 border-amber-500/30">
                  Bientôt disponible
                </Badge>
              </div>
              <CardTitle class="text-3xl font-extrabold">Sur devis</CardTitle>
              <CardDescription class="text-base">
                Tarification personnalisée selon la taille et les besoins de votre organisation.
              </CardDescription>
            </CardHeader>
            <CardContent class="space-y-3">
              <div class="flex items-center gap-2">
                <Check class="text-primary size-4 flex-shrink-0" />
                <span>Gestion du stock interne</span>
              </div>
              <div class="flex items-center gap-2">
                <Check class="text-primary size-4 flex-shrink-0" />
                <span>Finance & RH dédiées ONG</span>
              </div>
              <div class="flex items-center gap-2">
                <Check class="text-primary size-4 flex-shrink-0" />
                <span>Missions terrain</span>
              </div>
              <div class="flex items-center gap-2">
                <Check class="text-primary size-4 flex-shrink-0" />
                <span>Appels d'offres & AMI</span>
              </div>
              <div class="flex items-center gap-2">
                <Check class="text-primary size-4 flex-shrink-0" />
                <span>Chat entre commerces & orgs</span>
              </div>
              <div class="flex items-center gap-2">
                <Check class="text-primary size-4 flex-shrink-0" />
                <span>Matching intelligent partenaires</span>
              </div>
            </CardContent>
            <CardFooter class="flex flex-col gap-3">
              <Button class="w-full font-bold" as-child>
                <a href="#contact">Nous contacter</a>
              </Button>
              <Button variant="outline" class="w-full" as-child>
                <a href="#devis">Demander un devis</a>
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div class="lg:col-span-2 space-y-4">
          <div class="flex items-center gap-3 mb-4">
            <h3 class="text-xl font-bold">Fonctionnalités ONG & Organisations</h3>
            <Badge class="bg-amber-500/20 text-amber-600 dark:text-amber-400 border-amber-500/30">
              En développement
            </Badge>
          </div>
          <p class="text-muted-foreground mb-6">
            M-STORE s'étend bientôt aux ONG, institutions et organisations avec un module dédié
            pour gérer le stock interne, les finances, les RH, les missions terrain et les appels d'offres.
          </p>
          <div
            v-for="cat in ongCategories"
            :key="cat.title"
            class="border rounded-xl overflow-hidden border-primary/20"
          >
            <button
              @click="toggleCategory('ong_' + cat.title)"
              class="w-full flex items-center justify-between p-4 hover:bg-muted/50 transition-colors text-left"
            >
              <div class="flex items-center gap-3">
                <span class="text-2xl">{{ cat.icon }}</span>
                <span class="font-semibold">{{ cat.title }}</span>
                <Badge variant="secondary">{{ cat.count }}</Badge>
              </div>
              <span class="text-muted-foreground text-lg">
                {{ expandedCategories.has('ong_' + cat.title) ? '−' : '+' }}
              </span>
            </button>
            <div v-if="expandedCategories.has('ong_' + cat.title)" class="px-4 pb-4 pt-0">
              <ul class="space-y-2">
                <li
                  v-for="item in cat.items"
                  :key="item"
                  class="flex items-start gap-2 text-muted-foreground text-sm"
                >
                  <Check class="text-primary size-4 flex-shrink-0 mt-0.5" />
                  {{ item }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
