<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import {
  Smartphone,
  Bot,
  Brain,
  Video,
  Shield,
  BarChart3,
  Cloud,
  Megaphone,
  Wifi,
  Code2,
  Lock,
  Link,
  Settings,
} from "lucide-vue-next";

interface ServiceProps {
  icon: string;
  title: string;
  description: string;
}

const serviceList: ServiceProps[] = [
  {
    icon: "smartphone",
    title: "Applications Mobiles",
    description:
      "iOS et Android natif, apps hybrides (React Native, Flutter), maintenance et publication App Store & Google Play.",
  },
  {
    icon: "bot",
    title: "Intelligence Artificielle & Agents IA",
    description:
      "Agents intelligents, assistants virtuels, automatisation des tâches métiers et intégration IA dans vos applications.",
  },
  {
    icon: "brain",
    title: "Machine Learning & Modèles",
    description:
      "Création & entraînement de modèles IA, NLP, computer vision, déploiement et optimisation de modèles.",
  },
  {
    icon: "video",
    title: "Production Vidéo 2D & 3D",
    description:
      "Montage vidéo professionnel, animation 2D/3D, motion design, effets spéciaux et contenus publicitaires.",
  },
  {
    icon: "shield",
    title: "Réseaux & Cybersécurité",
    description:
      "Installation réseau, audit de sécurité, tests d'intrusion (pentesting), pare-feu, VPN et systèmes sécurisés.",
  },
  {
    icon: "barChart3",
    title: "Data Analytics & Business Intelligence",
    description:
      "Collecte de données, dashboards interactifs temps réel, BI avancée et décisions data-driven.",
  },
  {
    icon: "cloud",
    title: "Cloud & Hébergement",
    description:
      "Déploiement AWS, Azure, GCP, gestion VPS & serveurs dédiés, DevOps, CI/CD et sauvegarde des données.",
  },
  {
    icon: "megaphone",
    title: "Communication & Marketing Digital",
    description:
      "Gestion réseaux sociaux, Facebook Ads & Google Ads, SEO, référencement naturel et stratégie digitale.",
  },
  {
    icon: "wifi",
    title: "Hardware & Fourniture Internet",
    description:
      "Vente de matériel informatique, installation réseaux internet & LAN, connectivité et maintenance.",
  },
  {
    icon: "code2",
    title: "Développement Web",
    description:
      "Sites web modernes, applications SaaS, e-commerce, maintenance et optimisation SEO.",
  },
  {
    icon: "lock",
    title: "Cryptographie & Sécurité des données",
    description:
      "Chiffrement de données, gestion des accès (IAM), protection des transactions numériques, audit RGPD.",
  },
  {
    icon: "link",
    title: "Blockchain & Web3",
    description:
      "Applications décentralisées (dApps), smart contracts (Solidity & Rust), tokenisation, NFT et conseil blockchain.",
  },
  {
    icon: "settings",
    title: "CRM, Low-Code & No-Code",
    description:
      "Mise en place CRM, automatisation No-Code (Make, n8n), création rapide d'apps et intégration de solutions métiers.",
  },
];

const iconMap: Record<string, any> = {
  smartphone: Smartphone,
  bot: Bot,
  brain: Brain,
  video: Video,
  shield: Shield,
  barChart3: BarChart3,
  cloud: Cloud,
  megaphone: Megaphone,
  wifi: Wifi,
  code2: Code2,
  lock: Lock,
  link: Link,
  settings: Settings,
};
</script>

<template>
  <section id="services" class="container py-24 sm:py-32">
    <h2 class="text-lg text-primary text-center mb-2 tracking-wider">
      Services
    </h2>

    <h2 class="text-3xl md:text-4xl text-center font-bold mb-4">
      Nos 13 domaines d'expertise
    </h2>

    <h3 class="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
      M-HUB couvre l'intégralité du spectre IT — du développement à la sécurité,
      du cloud au marketing digital.
    </h3>

    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div v-for="{ icon, title, description } in serviceList" :key="title">
        <Card class="h-full bg-background border-0 shadow-none">
          <CardHeader class="flex justify-center items-center">
            <div
              class="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4"
            >
              <component :is="iconMap[icon]" class="size-6 text-primary" />
            </div>
            <CardTitle>{{ title }}</CardTitle>
          </CardHeader>
          <CardContent class="text-muted-foreground text-center">
            {{ description }}
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
</template>
