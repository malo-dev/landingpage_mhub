<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import {
  BarChart3,
  Package,
  ShoppingCart,
  Truck,
  DollarSign,
  Users,
  CreditCard,
  Building2,
  Bell,
  LayoutDashboard,
  UserCog,
  FileText,
  Store,
  Monitor,
  MessageSquare,
  Briefcase,
  TrendingUp,
  Receipt,
  Banknote,
  Globe,
  History,
  Tag,
  ShieldCheck,
  Layers,
  Headphones,
  Workflow,
  Star,
  Settings,
  Heart,
} from "lucide-vue-next";

interface ModuleProps {
  icon: string;
  name: string;
  description: string;
}

const modules: ModuleProps[] = [
  { icon: "layoutDashboard", name: "BordTrack", description: "Tableau de bord — Vue globale et temps réel de toute l'activité." },
  { icon: "package", name: "StockTrack", description: "Stock & Produits — Gestion complète de l'inventaire en temps réel." },
  { icon: "tag", name: "CategoryTrack", description: "Catégories — Organisation des produits par famille et catégorie." },
  { icon: "receipt", name: "VendoTrack", description: "Ventes — Enregistrement et historique de toutes vos ventes." },
  { icon: "fileText", name: "RedevTrack", description: "Redevances — Suivi des loyers, commissions et revenus récurrents." },
  { icon: "truck", name: "ExpeTrack", description: "Expéditions — Gestion des livraisons internes et externes." },
  { icon: "barChart3", name: "BudgetTrack", description: "Budget — Planification et suivi budgétaire par période." },
  { icon: "trendingUp", name: "PrevTrack", description: "Prévisions — Planification des tâches et objectifs à venir." },
  { icon: "dollarSign", name: "CurrencyTrack", description: "Devises — Gestion des devises actives (USD, CDF, EUR...)." },
  { icon: "banknote", name: "ProfitLossTrack", description: "Profits & Pertes — Analyse financière globale." },
  { icon: "shoppingCart", name: "ClientOrders", description: "Commandes clients — Gestion complète et boutique publique." },
  { icon: "creditCard", name: "ClientDebts", description: "Dettes clients — Suivi des ventes à crédit et paiements partiels." },
  { icon: "history", name: "PriceHistoryTrack", description: "Historique des prix — Traçabilité de tous les changements." },
  { icon: "store", name: "CommerceTrack", description: "Commerces — Gestion de plusieurs commerces depuis un compte." },
  { icon: "layers", name: "BranchTrack", description: "Extensions — Gestion des branches / points de vente." },
  { icon: "userCog", name: "UserTrack", description: "Utilisateurs — Comptes, 2FA et journal d'audit." },
  { icon: "shieldCheck", name: "RoleTrack", description: "Rôles — Permissions granulaires par fonctionnalité." },
  { icon: "building2", name: "DepartmentTrack", description: "Départements — Organisation interne par départements." },
  { icon: "users", name: "PersonnelTrack", description: "Personnel — RH complète, salaires, présences, absences." },
  { icon: "dollarSign", name: "ChargesTrack", description: "Charges — Suivi de toutes les dépenses de l'entreprise." },
  { icon: "banknote", name: "CashFlowTrack", description: "Trésorerie — Flux entrants et sortants en temps réel." },
  { icon: "monitor", name: "POSTrack", description: "Point de vente — Interface caisse pour ventes rapides." },
  { icon: "bell", name: "NotificationTrack", description: "Notifications — Centre d'alertes et notifications système." },
  { icon: "briefcase", name: "JobOffersTrack", description: "Offres d'emploi — Publication et gestion des candidatures." },
  { icon: "heart", name: "ClientTrack", description: "Clients — Base de données et historique des relations." },
  { icon: "messageSquare", name: "FeedbackTrack", description: "Feedbacks — Collecte et suivi des retours clients." },
  { icon: "headphones", name: "SupportTrack", description: "Support — Système de tickets de support client." },
  { icon: "globe", name: "Shop", description: "Boutique publique — Vitrine en ligne accessible sans connexion." },
  { icon: "settings", name: "Parametre", description: "Paramètres — Configuration et personnalisation complète." },
];

const iconMap: Record<string, any> = {
  layoutDashboard: LayoutDashboard,
  package: Package,
  tag: Tag,
  receipt: Receipt,
  fileText: FileText,
  truck: Truck,
  barChart3: BarChart3,
  trendingUp: TrendingUp,
  dollarSign: DollarSign,
  banknote: Banknote,
  shoppingCart: ShoppingCart,
  creditCard: CreditCard,
  history: History,
  store: Store,
  layers: Layers,
  userCog: UserCog,
  shieldCheck: ShieldCheck,
  building2: Building2,
  users: Users,
  monitor: Monitor,
  bell: Bell,
  briefcase: Briefcase,
  heart: Heart,
  messageSquare: MessageSquare,
  headphones: Headphones,
  globe: Globe,
  settings: Settings,
  star: Star,
  workflow: Workflow,
};
</script>

<template>
  <section id="modules" class="container py-24 sm:py-32">
    <div class="text-center mb-8">
      <h2 class="text-lg text-primary text-center mb-2 tracking-wider">
        M-STORE
      </h2>
      <h2 class="text-3xl md:text-4xl text-center font-bold mb-4">
        29 modules intégrés
      </h2>
      <p class="md:w-1/2 mx-auto text-muted-foreground">
        Chaque module gère un aspect précis de votre commerce — ensemble, ils forment
        un système de gestion complet et cohérent.
      </p>
    </div>

    <Carousel
      :opts="{ align: 'start' }"
      class="relative w-[80%] sm:w-[90%] lg:max-w-screen-xl mx-auto"
    >
      <CarouselContent>
        <CarouselItem
          v-for="{ icon, name, description } in modules"
          :key="name"
          class="md:basis-1/2 lg:basis-1/3"
        >
          <Card class="bg-muted/50 dark:bg-card h-full">
            <CardHeader>
              <div class="flex items-center gap-3 mb-2">
                <div class="bg-primary/20 p-2 rounded-lg">
                  <component :is="iconMap[icon]" class="size-5 text-primary" />
                </div>
                <CardTitle class="text-lg">{{ name }}</CardTitle>
              </div>
            </CardHeader>
            <CardContent class="text-muted-foreground">
              {{ description }}
            </CardContent>
          </Card>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  </section>
</template>
