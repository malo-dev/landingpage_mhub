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
  <section id="screenshots" class="container py-24 sm:py-32">
    <div class="text-center mb-8">
      <h2 v-animate class="text-lg text-primary text-center mb-2 tracking-wider">
        {{ t('howItWorks.label') }}
      </h2>
      <h2 v-animate="{ delay: 100 }" class="text-3xl md:text-4xl text-center font-bold">
        {{ t('howItWorks.title') }}
      </h2>
    </div>

    <div class="lg:w-[90%] mx-auto relative">
      <div
        v-for="({ badgeTitle, title, description, image }, index) in screenshotList"
        :key="index"
        :class="['flex mb-16 items-center gap-8 flex-col lg:flex-row', { 'lg:flex-row-reverse': index % 2 !== 0 }]"
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
          <div :class="['-z-10 absolute w-44 h-72 lg:w-64 lg:h-80 rounded-full bg-primary/15 dark:bg-primary/10 blur-3xl', index % 2 === 0 ? 'right-0 -top-6' : 'left-0 -top-6']"></div>
          <img :src="image" :alt="`M-STORE — ${title}`" class="w-full rounded-xl border border-primary/20 shadow-xl" />
        </div>
      </div>
    </div>
  </section>
</template>
