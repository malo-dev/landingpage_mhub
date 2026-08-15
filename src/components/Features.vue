<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { Card, CardTitle } from "@/components/ui/card";
import {
  Smartphone, Bot, Brain, Video, Shield, BarChart3, Cloud,
  Megaphone, Wifi, Code2, Lock, Link, Settings,
} from "lucide-vue-next";

const { t, tm } = useI18n();

const iconList = [Smartphone, Bot, Brain, Video, Shield, BarChart3, Cloud, Megaphone, Wifi, Code2, Lock, Link, Settings];

// Deux tuiles "flagship" en grand format (Réseaux & Cybersécurité, Cloud & Hébergement)
// pour casser la grille uniforme — pas de photo dispo, donc dégradé + icône géante + motif.
const flagshipIndexes = [4, 6];

const serviceList = computed(() =>
  (tm('services.items') as any[]).map((item: any, i: number) => ({
    icon: iconList[i],
    title: item.title,
    description: item.description,
    flagship: flagshipIndexes.includes(i),
  }))
);
</script>

<template>
  <section id="services" class="container py-24 sm:py-32">
    <div class="mb-12 text-center">
      <div v-animate class="section-eyebrow mb-3 justify-center">{{ t('services.label') }}</div>
      <h2 v-animate="{ delay: 100 }" class="mb-4 text-center text-3xl font-bold md:text-4xl">
        {{ t('services.title') }}
      </h2>
      <h3 v-animate="{ delay: 200 }" class="mx-auto text-center text-xl text-muted-foreground md:w-1/2">
        {{ t('services.subtitle') }}
      </h3>
    </div>

    <div class="grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <template v-for="({ icon, title, description, flagship }, index) in serviceList" :key="index">
        <!-- Tuile flagship : dégradé + icône géante + motif, pas de Card standard -->
        <div
          v-if="flagship"
          v-animate="{ type: 'fade-up', delay: (index % 4) * 90 }"
          class="flagship-tile tech-glow group relative col-span-1 flex min-h-[220px] flex-col justify-end overflow-hidden rounded-2xl p-6 sm:col-span-2"
        >
          <component
            :is="icon"
            :stroke-width="1"
            class="pointer-events-none absolute -right-8 -top-8 h-44 w-44 text-white/10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
          />
          <div class="grid-bg pointer-events-none absolute inset-0 opacity-20" />
          <div class="pointer-events-none absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-primary/30 blur-3xl" />
          <component :is="icon" class="relative z-10 mb-3 size-8 text-primary" />
          <h4 class="relative z-10 text-xl font-bold text-white">{{ title }}</h4>
          <p class="relative z-10 mt-2 max-w-md text-sm text-white/70">{{ description }}</p>
        </div>

        <!-- Tuile standard -->
        <Card
          v-else
          v-animate="{ type: 'fade-up', delay: (index % 4) * 90 }"
          class="tech-glow group flex h-full flex-col gap-3 p-5"
        >
          <div class="w-fit rounded-lg bg-primary/10 p-2.5 ring-4 ring-primary/5 transition-colors group-hover:bg-primary/20">
            <component :is="icon" class="size-5 text-primary" />
          </div>
          <CardTitle class="text-base transition-colors group-hover:text-primary">{{ title }}</CardTitle>
          <p class="flex-1 text-sm text-muted-foreground">{{ description }}</p>
        </Card>
      </template>
    </div>
  </section>
</template>
