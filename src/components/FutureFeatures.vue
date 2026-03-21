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

const futureList = computed(() => tm('future.items') as any[]);
</script>

<template>
  <section id="future" class="container py-24 sm:py-32">
    <div v-animate class="text-center mb-12">
      <Badge class="mb-4 bg-primary/10 text-primary border-primary/30">{{ t('future.badge') }}</Badge>
      <h2 class="text-lg text-primary text-center mb-2 tracking-wider">{{ t('future.label') }}</h2>
      <h2 class="text-3xl md:text-4xl text-center font-bold mb-4">{{ t('future.title') }}</h2>
      <p class="md:w-2/3 mx-auto text-xl text-muted-foreground">{{ t('future.subtitle') }}</p>
    </div>

    <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <Card
        v-for="(feat, index) in futureList"
        v-animate="{ type: 'fade-up', delay: (index % 4) * 80 }"
        :key="index"
        class="bg-muted/40 dark:bg-card border border-primary/10 hover:border-primary/40 hover:shadow-md transition-all duration-300 group"
      >
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
    </div>
  </section>
</template>
