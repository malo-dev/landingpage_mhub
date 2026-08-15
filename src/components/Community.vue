<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { MapPin, Globe, Globe2 } from "lucide-vue-next";

const { t } = useI18n();

// Couleur unique (primary) pour les 3 étapes — pas de carte "mise en avant" à part.
const cards = [
  { icon: MapPin, key: "card1" },
  { icon: Globe, key: "card2" },
  { icon: Globe2, key: "card3" },
];
</script>

<template>
  <section id="vision" class="py-12">
    <hr />
    <div class="container py-20 sm:py-20">
      <div v-animate class="text-center mb-12">
        <div class="section-eyebrow mb-3">{{ t('vision.label') }}</div>
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          {{ t('vision.title') }}
          <span class="text-transparent bg-gradient-to-r from-primary to-[#0099BB] bg-clip-text"> M-NETHUB</span>
        </h2>
        <p class="md:w-1/2 mx-auto text-xl text-muted-foreground">{{ t('vision.subtitle') }}</p>
      </div>

      <!-- Bandeau sombre décoratif (fixe, pas lié au thème) qui porte la timeline -->
      <div class="flagship-tile relative overflow-hidden rounded-3xl p-8 sm:p-12 lg:w-[92%] mx-auto">
        <div class="grid-bg pointer-events-none absolute inset-0 opacity-20" />
        <Globe2
          :stroke-width="0.6"
          class="pointer-events-none absolute -right-16 -top-20 h-80 w-80 text-white/[0.06]"
        />
        <div class="pointer-events-none absolute -left-16 -bottom-16 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />

        <!-- Ligne de progression reliant les 3 étapes -->
        <div v-animate="{ type: 'fade-in', delay: 100 }" class="relative z-10 mx-auto mb-10 hidden max-w-3xl items-center md:flex">
          <template v-for="(card, i) in cards" :key="'dot-' + card.key">
            <span class="relative flex h-3 w-3 flex-shrink-0">
              <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/50" />
              <span class="relative inline-flex h-3 w-3 rounded-full bg-primary" />
            </span>
            <span v-if="i < cards.length - 1" class="h-px flex-1 bg-gradient-to-r from-primary/60 via-primary/25 to-primary/60" />
          </template>
        </div>

        <div class="relative z-10 grid gap-6 md:grid-cols-3">
          <Card
            v-for="(card, i) in cards"
            :key="card.key"
            v-animate="{ type: 'step', delay: i * 150, repeat: true }"
            class="border-white/15 bg-white/[0.06] text-center text-white backdrop-blur-xl"
          >
            <CardHeader>
              <div class="flex justify-center mb-5">
                <div class="rounded-2xl bg-primary/20 p-5 ring-4 ring-primary/10">
                  <component :is="card.icon" class="h-10 w-10 text-primary" />
                </div>
              </div>
              <CardTitle class="text-2xl">{{ t(`vision.${card.key}.title`) }}</CardTitle>
            </CardHeader>
            <CardContent class="text-white/60">
              <div class="mb-2 text-lg font-bold text-primary">{{ t(`vision.${card.key}.year`) }}</div>
              {{ t(`vision.${card.key}.text`) }}
            </CardContent>
          </Card>
        </div>
      </div>

      <div class="text-center mt-12">
        <blockquote v-animate="{ type: 'fade-in', delay: 400 }" class="text-xl md:text-2xl italic text-muted-foreground max-w-3xl mx-auto">
          "{{ t('vision.quote') }}
          <br />
          <span class="text-foreground font-medium">{{ t('vision.quoteEnd') }}"</span>
        </blockquote>
      </div>
    </div>
    <hr />
  </section>
</template>
