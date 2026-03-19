<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface FutureFeatureProps {
  icon: string;
  title: string;
  items: string[];
}

const futureList: FutureFeatureProps[] = [
  {
    icon: "🔍",
    title: "Reconnaissance de produits par image (IA)",
    items: [
      "Photographier un produit pour l'identifier automatiquement",
      "Correspondance avec le catalogue stock existant",
      "Ajout rapide au stock par simple photo",
      "Détection de produits similaires dans la base",
      "Suggestions automatiques de prix et de catégorie",
      "Fonctionne depuis mobile et tablette",
    ],
  },
  {
    icon: "📣",
    title: "Marketing digital des produits",
    items: [
      "Création de visuels promotionnels automatiques",
      "Publication de promotions sur la boutique publique",
      "Campagnes de prix réduits avec durée limitée",
      "Partage de produits via lien ou QR code",
      "Statistiques de vues et clics sur les produits",
      "Promotions ciblées pour les ONG et commerces",
      "Notification des clients abonnés lors de promos",
    ],
  },
  {
    icon: "🤖",
    title: "Assistant IA (Chatbot)",
    items: [
      "Assistant intelligent intégré dans le tableau de bord",
      "Réponses aux questions sur le stock, ventes, finances",
      "Génération automatique de rapports en langage naturel",
      "Suggestions d'actions : 'Votre stock de X est faible, réapprovisionner ?'",
      "Aide à la navigation dans l'application",
      "Support client automatisé pour les boutiques publiques",
      "Analyse prédictive des ventes et des tendances",
    ],
  },
  {
    icon: "📈",
    title: "Analyse prédictive & Business Intelligence",
    items: [
      "Prévision des ventes basée sur l'historique",
      "Détection automatique des produits les plus rentables",
      "Alertes intelligentes sur les tendances anormales",
      "Recommandations d'optimisation du stock",
      "Rapports automatiques hebdomadaires et mensuels",
      "Score de performance par commerce et extension",
    ],
  },
  {
    icon: "📱",
    title: "Application mobile native",
    items: [
      "Application Android & iOS dédiée M-STORE",
      "Accès complet hors-ligne avec synchronisation",
      "Scan de code-barres pour gestion du stock",
      "Notifications push en temps réel",
      "Interface optimisée pour la gestion mobile",
      "Tableau de bord simplifié pour gérants terrain",
    ],
  },
  {
    icon: "💳",
    title: "Paiements & Mobile Money intégrés",
    items: [
      "Paiement en ligne via Mobile Money (M-Pesa, Airtel…)",
      "Génération de reçus numériques automatiques",
      "Suivi des paiements en temps réel",
      "Remboursements et gestion des litiges",
      "Tableau de bord des transactions financières",
      "Intégration avec les banques locales",
    ],
  },
  {
    icon: "🌍",
    title: "Multi-langue & Localisation",
    items: [
      "Interface disponible en Français, Anglais, Swahili",
      "Adaptation aux formats de devises locales",
      "Formats de dates et heures par région",
      "Traduction automatique du catalogue produits",
    ],
  },
  {
    icon: "🔗",
    title: "Intégrations & API partenaires",
    items: [
      "Export vers logiciels comptables (Excel, PDF avancé)",
      "API publique pour intégrations tierces",
      "Connexion avec plateformes e-commerce externes",
      "Webhooks pour notifications vers systèmes externes",
      "Import de données depuis fichiers CSV/Excel",
    ],
  },
];
</script>

<template>
  <section id="future" class="container py-24 sm:py-32">
    <div class="text-center mb-12">
      <Badge class="mb-4 bg-primary/10 text-primary border-primary/30">
        Prochaines mises à jour
      </Badge>
      <h2 class="text-lg text-primary text-center mb-2 tracking-wider">Innovation</h2>
      <h2 class="text-3xl md:text-4xl text-center font-bold mb-4">
        Intelligence Artificielle & Fonctionnalités à venir
      </h2>
      <p class="md:w-2/3 mx-auto text-xl text-muted-foreground">
        L'équipe M-HUB développe activement ces fonctionnalités de pointe pour propulser
        M-STORE vers la prochaine génération de gestion commerciale.
      </p>
    </div>

    <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <Card
        v-for="{ icon, title, items } in futureList"
        :key="title"
        class="bg-muted/40 dark:bg-card border border-primary/10 hover:border-primary/40 transition-colors group"
      >
        <CardHeader>
          <div class="flex items-start justify-between mb-2">
            <span class="text-3xl">{{ icon }}</span>
            <Badge variant="outline" class="text-xs border-primary/30 text-primary">
              Bientôt
            </Badge>
          </div>
          <CardTitle class="text-base leading-tight group-hover:text-primary transition-colors">
            {{ title }}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul class="space-y-1.5">
            <li
              v-for="item in items"
              :key="item"
              class="text-xs text-muted-foreground flex items-start gap-1.5"
            >
              <span class="text-primary mt-0.5 flex-shrink-0">›</span>
              {{ item }}
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  </section>
</template>
