<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import screenshot1 from "@/assets/mhubscreenshot (1).png";
import screenshot2 from "@/assets/mhubscreenshot (2).png";
import screenshot3 from "@/assets/mhubscreenshot (3).png";

const { t, tm } = useI18n();
const images = [screenshot1, screenshot2, screenshot3];

const screenshotList = computed(() =>
  (tm('howItWorks.items') as any[]).map((item: any, i: number) => ({
    badgeTitle: item.badge,
    title: item.title,
    description: item.description,
    image: images[i],
  }))
);
</script>

<template>
  <section id="screenshots" class="relative overflow-hidden py-24 sm:py-32">
    <!-- Hero background -->
    <div class="absolute inset-0 -z-10 bg-gradient-to-b from-background via-primary/5 to-background" />
    <!-- SVG dot grid -->
    <div class="absolute inset-0 -z-10 opacity-[0.07]"
      style="background-image: radial-gradient(circle, currentColor 1px, transparent 1px); background-size: 28px 28px;" />
    <!-- Glowing orbs -->
    <div class="absolute -top-32 left-1/4 -z-10 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
    <div class="absolute -bottom-32 right-1/4 -z-10 w-96 h-96 bg-primary/15 rounded-full blur-[120px]" />

    <div class="container">
      <!-- Section header with hero feel -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6">
          <span class="size-2 rounded-full bg-primary animate-pulse" />
          <span class="text-sm font-medium text-primary">M-STORE</span>
        </div>
        <div v-animate class="section-eyebrow justify-center mb-3">
          {{ t('howItWorks.label') }}
        </div>
        <h2 v-animate="{ delay: 100 }" class="text-4xl md:text-5xl text-center font-bold">
          {{ t('howItWorks.title') }}
        </h2>
      </div>

      <div class="lg:w-[90%] mx-auto relative">
        <div
          v-for="({ badgeTitle, title, description, image }, index) in screenshotList"
          :key="index"
          :class="['flex mb-24 items-center gap-10 flex-col lg:flex-row', { 'lg:flex-row-reverse': index % 2 !== 0 }]"
        >
          <Card
            v-animate="{ type: index % 2 === 0 ? 'fade-left' : 'fade-right', delay: 100, repeat: true }"
            class="tech-glow flex-1 h-full p-2"
          >
            <CardHeader>
              <div class="pb-4"><Badge>{{ badgeTitle }}</Badge></div>
              <CardTitle class="text-2xl md:text-3xl">{{ title }}</CardTitle>
            </CardHeader>
            <CardContent v-scroll-text class="text-muted-foreground text-lg">{{ description }}</CardContent>
          </Card>

          <div v-animate="{ type: index % 2 === 0 ? 'fade-right' : 'fade-left', delay: 200, repeat: true }" class="flex-1 relative">
            <!-- Glow derrière l'image -->
            <div :class="['-z-10 absolute w-44 h-72 lg:w-64 lg:h-80 rounded-full bg-primary/25 blur-3xl', index % 2 === 0 ? 'right-0 -top-6' : 'left-0 -top-6']" />
            <!-- Cadre "navigateur" glass autour de la capture -->
            <div class="glass-panel tech-glow relative overflow-hidden rounded-2xl shadow-2xl shadow-primary/10 group transition-transform duration-500 hover:scale-[1.02]">
              <div class="flex items-center gap-1.5 border-b border-border/50 px-4 py-2.5">
                <span class="h-2.5 w-2.5 rounded-full bg-destructive/70" />
                <span class="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
                <span class="h-2.5 w-2.5 rounded-full bg-primary/70" />
                <span class="ml-3 truncate text-xs text-muted-foreground">m-store.m-nethub.tech</span>
              </div>
              <div class="relative">
                <img :src="image" :alt="`M-STORE — ${title}`" class="w-full" />
                <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
