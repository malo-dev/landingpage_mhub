<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Smartphone, Bot, Brain, Video, Shield, BarChart3, Cloud,
  Megaphone, Wifi, Code2, Lock, Link, Settings,
} from "lucide-vue-next";

const { t, tm } = useI18n();

const iconList = [Smartphone, Bot, Brain, Video, Shield, BarChart3, Cloud, Megaphone, Wifi, Code2, Lock, Link, Settings];

const serviceList = computed(() =>
  (tm('services.items') as any[]).map((item: any, i: number) => ({
    icon: iconList[i],
    title: item.title,
    description: item.description,
  }))
);
</script>

<template>
  <section id="services" class="container py-24 sm:py-32">
    <h2 v-animate class="text-lg text-primary text-center mb-2 tracking-wider">
      {{ t('services.label') }}
    </h2>
    <h2 v-animate="{ delay: 100 }" class="text-3xl md:text-4xl text-center font-bold mb-4">
      {{ t('services.title') }}
    </h2>
    <h3 v-animate="{ delay: 200 }" class="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
      {{ t('services.subtitle') }}
    </h3>

    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div
        v-for="({ icon, title, description }, index) in serviceList"
        v-animate="{ type: 'fade-up', delay: (index % 3) * 100 }"
        :key="index"
      >
        <Card class="h-full bg-background border-0 shadow-none">
          <CardHeader class="flex justify-center items-center">
            <div class="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
              <component :is="icon" class="size-6 text-primary" />
            </div>
            <CardTitle>{{ title }}</CardTitle>
          </CardHeader>
          <CardContent class="text-muted-foreground text-center">{{ description }}</CardContent>
        </Card>
      </div>
    </div>
  </section>
</template>
