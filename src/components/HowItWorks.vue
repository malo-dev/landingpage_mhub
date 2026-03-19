<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import screenshot1 from "@/assets/mhubscreenshot (1).png";
import screenshot2 from "@/assets/mhubscreenshot (2).png";
import screenshot3 from "@/assets/mhubscreenshot (3).png";

interface ScreenshotProps {
  badgeTitle: string;
  title: string;
  description: string;
  image: string;
}

const screenshotList: ScreenshotProps[] = [
  {
    badgeTitle: "Tableau de bord",
    title: "Vue globale et temps réel de toute votre activité",
    description:
      "KPIs clés en temps réel : ventes, stock, dettes, graphiques d'évolution du CA, alertes de stock faible et résumé des tâches à venir — tout en un coup d'œil.",
    image: screenshot1,
  },
  {
    badgeTitle: "Stock & Ventes",
    title: "Gestion complète de votre inventaire et vos ventes",
    description:
      "Ajout, modification et suppression de produits, décrément automatique du stock lors des ventes, historique paginé, export Excel et interface POS pour ventes rapides.",
    image: screenshot2,
  },
  {
    badgeTitle: "Finance & RH",
    title: "Pilotez vos finances et vos ressources humaines",
    description:
      "Trésorerie, charges, profits & pertes, budgets, salaires, pointage du personnel, gestion des dettes clients et tableau de bord financier en temps réel.",
    image: screenshot3,
  },
];
</script>

<template>
  <section id="screenshots" class="container py-24 sm:py-32">
    <div class="text-center mb-8">
      <h2 class="text-lg text-primary text-center mb-2 tracking-wider">
        Aperçu de M-STORE
      </h2>
      <h2 class="text-3xl md:text-4xl text-center font-bold">
        Interface moderne & intuitive
      </h2>
    </div>

    <div class="lg:w-[90%] mx-auto relative">
      <div
        v-for="({ badgeTitle, title, description, image }, index) in screenshotList"
        :key="title"
        :class="[
          'flex mb-16 items-center gap-8 flex-col lg:flex-row',
          { 'lg:flex-row-reverse': index % 2 !== 0 },
        ]"
      >
        <Card class="flex-1 h-full bg-transparent border-0 shadow-none">
          <CardHeader>
            <div class="pb-4">
              <Badge>{{ badgeTitle }}</Badge>
            </div>
            <CardTitle class="text-2xl md:text-3xl">
              {{ title }}
            </CardTitle>
          </CardHeader>
          <CardContent class="text-muted-foreground text-lg">
            {{ description }}
          </CardContent>
        </Card>

        <div class="flex-1 relative">
          <div
            :class="[
              '-z-10 absolute w-44 h-72 lg:w-64 lg:h-80 rounded-full bg-primary/15 dark:bg-primary/10 blur-3xl',
              index % 2 === 0 ? 'right-0 -top-6' : 'left-0 -top-6',
            ]"
          ></div>
          <img
            :src="image"
            :alt="`M-STORE — ${title}`"
            class="w-full rounded-xl border border-primary/20 shadow-xl"
          />
        </div>
      </div>
    </div>
  </section>
</template>
