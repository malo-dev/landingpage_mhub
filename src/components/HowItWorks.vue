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
        <h2 v-animate class="text-sm text-primary text-center mb-3 tracking-wider uppercase font-semibold">
          {{ t('howItWorks.label') }}
        </h2>
        <h2 v-animate="{ delay: 100 }" class="text-4xl md:text-5xl text-center font-bold">
          {{ t('howItWorks.title') }}
        </h2>
      </div>

      <div class="lg:w-[90%] mx-auto relative">
        <div
          v-for="({ badgeTitle, title, description, image }, index) in screenshotList"
          :key="index"
          :class="['flex mb-20 items-center gap-10 flex-col lg:flex-row', { 'lg:flex-row-reverse': index % 2 !== 0 }]"
        >
          <Card
            v-animate="{ type: index % 2 === 0 ? 'fade-left' : 'fade-right', delay: 100 }"
            class="flex-1 h-full bg-transparent border-0 shadow-none"
          >
            <CardHeader>
              <div class="pb-4"><Badge>{{ badgeTitle }}</Badge></div>
              <CardTitle class="text-2xl md:text-3xl">{{ title }}</CardTitle>
            </CardHeader>
            <CardContent class="text-muted-foreground text-lg">{{ description }}</CardContent>
          </Card>

          <div v-animate="{ type: index % 2 === 0 ? 'fade-right' : 'fade-left', delay: 200 }" class="flex-1 relative">
            <!-- Glow behind image -->
            <div :class="['-z-10 absolute w-44 h-72 lg:w-64 lg:h-80 rounded-full bg-primary/20 blur-3xl', index % 2 === 0 ? 'right-0 -top-6' : 'left-0 -top-6']" />
            <!-- Image with ring -->
            <div class="relative rounded-2xl ring-1 ring-primary/20 shadow-2xl shadow-primary/10 overflow-hidden group transition-transform duration-500 hover:scale-[1.02]">
              <img :src="image" :alt="`M-STORE — ${title}`" class="w-full" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
