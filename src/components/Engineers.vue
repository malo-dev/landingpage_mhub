<script setup lang="ts">
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-vue-next";

interface ProfileProps {
  icon: string;
  title: string;
  skills: string[];
  popular?: boolean;
}

const profiles: ProfileProps[] = [
  {
    icon: "💻",
    title: "Développement Web & Mobile",
    skills: [
      "React, Vue, Angular",
      "Node.js / NestJS / Laravel",
      "Flutter / React Native",
      "TypeScript, Python, Go, PHP",
    ],
  },
  {
    icon: "🤖",
    title: "Intelligence Artificielle",
    skills: [
      "Machine Learning & Deep Learning",
      "NLP & Computer Vision",
      "Agents IA & Chatbots",
      "Déploiement de modèles",
    ],
    popular: true,
  },
  {
    icon: "🔐",
    title: "Réseaux & Sécurité",
    skills: [
      "Infrastructure réseau",
      "Audit & Pentesting",
      "VPN & Pare-feu",
      "Conformité & RGPD",
    ],
  },
  {
    icon: "🎨",
    title: "UI/UX Design",
    skills: [
      "Figma & Prototypage",
      "Design System",
      "UX Research",
      "Motion Design",
    ],
  },
  {
    icon: "📊",
    title: "Data & Analytics",
    skills: [
      "Data Engineering",
      "Dashboards & BI",
      "ETL & pipelines",
      "Power BI / Tableau",
    ],
  },
  {
    icon: "🎬",
    title: "Création de contenu",
    skills: [
      "Montage vidéo 2D/3D",
      "Motion Design",
      "Gestion réseaux sociaux",
      "Stratégie de contenu",
    ],
  },
];
</script>

<template>
  <section id="engineers" class="container py-24 sm:py-32">
    <h2 class="text-lg text-primary text-center mb-2 tracking-wider">
      Ingénieurs M-HUB
    </h2>

    <h2 class="text-3xl md:text-4xl text-center font-bold mb-4">
      Engager un expert M-HUB
    </h2>

    <h3 class="md:w-2/3 mx-auto text-xl text-center text-muted-foreground pb-14">
      Vous avez besoin d'un expert ? M-HUB met à votre disposition des ingénieurs qualifiés
      dans tous les domaines — peu importe le langage, la technologie ou la mission.
    </h3>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card
        v-for="{ icon, title, skills, popular } in profiles"
        :key="title"
        :class="{
          'drop-shadow-xl shadow-black/10 dark:shadow-primary/20 border-[1.5px] border-primary lg:scale-[1.05]': popular,
        }"
        class="relative"
      >
        <Badge
          v-if="popular"
          class="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground"
        >
          Populaire
        </Badge>
        <CardHeader>
          <div class="text-4xl mb-2">{{ icon }}</div>
          <CardTitle class="text-xl">{{ title }}</CardTitle>
          <CardDescription>Ingénieur M-HUB spécialisé</CardDescription>
        </CardHeader>
        <CardContent>
          <div class="space-y-3">
            <span
              v-for="skill in skills"
              :key="skill"
              class="flex items-center"
            >
              <Check class="text-primary mr-2 size-4 flex-shrink-0" />
              <span>{{ skill }}</span>
            </span>
          </div>
        </CardContent>
        <CardFooter>
          <Button
            :variant="popular ? 'default' : 'secondary'"
            class="w-full"
            as-child
          >
            <a href="#contact">Contacter M-HUB pour ce profil</a>
          </Button>
        </CardFooter>
      </Card>
    </div>
  </section>
</template>
