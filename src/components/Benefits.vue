<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Zap, ShieldCheck, HeadphonesIcon } from "lucide-vue-next";

interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: "zap",
    title: "Solution complète",
    description:
      "Du développement à la sécurité, du cloud au marketing — toutes vos solutions digitales en un seul partenaire technologique.",
  },
  {
    icon: "globe",
    title: "Expertise locale, impact global",
    description:
      "Fondée en RDC, M-HUB ambitionne de rayonner à l'échelle africaine puis mondiale avec des solutions adaptées aux réalités locales.",
  },
  {
    icon: "shieldCheck",
    title: "Qualité & Innovation",
    description:
      "IA, Blockchain, Cloud, Cybersécurité — nous intégrons les technologies de pointe pour propulser votre entreprise.",
  },
  {
    icon: "headphones",
    title: "Support & Accompagnement",
    description:
      "Formation, coaching startups, support technique 24/7 et maintenance continue pour que vous ne soyez jamais seul.",
  },
];

const iconMap: Record<string, any> = {
  zap: Zap,
  globe: Globe,
  shieldCheck: ShieldCheck,
  headphones: HeadphonesIcon,
};
</script>

<template>
  <section id="about" class="container py-24 sm:py-32">
    <div class="grid lg:grid-cols-2 place-items-center lg:gap-24">
      <div>
        <h2 class="text-lg text-primary mb-2 tracking-wider">À propos</h2>

        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          Pourquoi choisir M-HUB ?
        </h2>
        <p class="text-xl text-muted-foreground mb-8">
          M-HUB se positionne comme une solution globale dans le domaine informatique,
          capable d'accompagner les particuliers, startups, entreprises et institutions
          dans tous leurs besoins technologiques.
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-4 w-full">
        <Card
          v-for="({ icon, title, description }, index) in benefitList"
          :key="title"
          class="bg-muted/50 dark:bg-card hover:bg-background dark:hover:bg-background transition-all delay-75 group/number"
        >
          <CardHeader>
            <div class="flex justify-between">
              <component class="size-8 mb-6 text-primary" :is="iconMap[icon]" />
              <span
                class="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30"
              >0{{ index + 1 }}</span>
            </div>
            <CardTitle>{{ title }}</CardTitle>
          </CardHeader>
          <CardContent class="text-muted-foreground">
            {{ description }}
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
</template>
