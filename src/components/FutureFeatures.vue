<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ScanLine, Megaphone, Bot, TrendingUp,
  Smartphone, CreditCard, Languages, Plug,
} from "lucide-vue-next";

const { t, tm } = useI18n();

const futureIcons = [ScanLine, Megaphone, Bot, TrendingUp, Smartphone, CreditCard, Languages, Plug];

// Deux tuiles flagship (Reconnaissance produit par image, App mobile native) —
// pas de photo dispo, dégradé + icône géante en filigrane à la place.
const flagshipIndexes = [0, 4];

const futureList = computed(() =>
  (tm('future.items') as any[]).map((item: any, i: number) => ({
    ...item,
    flagship: flagshipIndexes.includes(i),
  }))
);
</script>

<template>
  <section id="future" class="container py-24 sm:py-32">
    <div v-animate class="text-center mb-12">
      <Badge class="mb-4 bg-primary/10 text-primary border-primary/30">{{ t('future.badge') }}</Badge>
      <div class="section-eyebrow justify-center mb-3">{{ t('future.label') }}</div>
      <h2 class="text-3xl md:text-4xl text-center font-bold mb-4">{{ t('future.title') }}</h2>
      <p class="md:w-2/3 mx-auto text-xl text-muted-foreground">{{ t('future.subtitle') }}</p>
    </div>

    <div class="grid auto-rows-fr gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <template v-for="(feat, index) in futureList" :key="index">
        <!-- Tuile flagship : dégradé + icône géante en filigrane -->
        <div
          v-if="feat.flagship"
          v-animate="{ type: 'step', delay: (index % 4) * 90, repeat: true }"
          class="flagship-tile tech-glow group relative col-span-1 overflow-hidden rounded-2xl p-6 sm:col-span-2"
        >
          <component
            :is="futureIcons[index]"
            :stroke-width="1"
            class="pointer-events-none absolute -right-8 -bottom-10 h-44 w-44 text-white/10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
          />
          <div class="grid-bg pointer-events-none absolute inset-0 opacity-20" />
          <div class="relative z-10 mb-3 flex items-start justify-between">
            <div class="rounded-xl bg-primary/15 p-2.5 ring-4 ring-primary/10">
              <component :is="futureIcons[index]" class="size-5 text-primary" />
            </div>
            <Badge variant="outline" class="border-primary/40 text-xs text-primary">{{ t('future.soon') }}</Badge>
          </div>
          <h4 class="relative z-10 text-lg font-bold text-white">{{ feat.title }}</h4>
          <ul class="relative z-10 mt-3 space-y-1.5">
            <li v-for="item in (feat.items as string[])" :key="item" class="flex items-start gap-1.5 text-xs text-white/70">
              <span class="mt-0.5 flex-shrink-0 text-primary">›</span>
              {{ item }}
            </li>
          </ul>
        </div>

        <!-- Tuile standard -->
        <Card v-else v-animate="{ type: 'step', delay: (index % 4) * 90, repeat: true }" class="tech-glow group">
          <CardHeader>
            <div class="flex items-start justify-between mb-3">
              <div class="bg-primary/10 p-2.5 rounded-xl ring-4 ring-primary/5 group-hover:bg-primary/20 transition-colors duration-300">
                <component :is="futureIcons[index]" class="size-5 text-primary" />
              </div>
              <Badge variant="outline" class="text-xs border-primary/30 text-primary">{{ t('future.soon') }}</Badge>
            </div>
            <CardTitle class="text-base leading-tight group-hover:text-primary transition-colors duration-200">
              {{ feat.title }}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul class="space-y-1.5">
              <li v-for="item in (feat.items as string[])" :key="item" class="text-xs text-muted-foreground flex items-start gap-1.5">
                <span class="text-primary mt-0.5 flex-shrink-0">›</span>
                {{ item }}
              </li>
            </ul>
          </CardContent>
        </Card>
      </template>
    </div>
  </section>
</template>
