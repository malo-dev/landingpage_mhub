<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Zap, ShieldCheck, HeadphonesIcon } from "lucide-vue-next";

const { t, tm } = useI18n();

const icons = [Zap, Globe, ShieldCheck, HeadphonesIcon];

const benefitList = computed(() =>
  (tm('benefits.items') as any[]).map((item: any, i: number) => ({
    icon: icons[i],
    title: item.title,
    description: item.description,
  }))
);
</script>

<template>
  <section id="about" class="container py-24 sm:py-32">
    <div class="grid lg:grid-cols-2 place-items-center lg:gap-24">
      <div v-animate="'fade-left'">
        <h2 class="text-lg text-primary mb-2 tracking-wider">{{ t('benefits.label') }}</h2>
        <h2 class="text-3xl md:text-4xl font-bold mb-4">{{ t('benefits.title') }}</h2>
        <p class="text-xl text-muted-foreground mb-8">{{ t('benefits.subtitle') }}</p>
      </div>

      <div class="grid lg:grid-cols-2 gap-4 w-full">
        <Card
          v-for="({ icon, title, description }, index) in benefitList"
          v-animate="{ type: 'fade-up', delay: index * 120 }"
          :key="index"
          class="bg-muted/50 dark:bg-card hover:bg-background dark:hover:bg-background transition-all delay-75 group/number"
        >
          <CardHeader>
            <div class="flex justify-between">
              <component class="size-8 mb-6 text-primary" :is="icon" />
              <span class="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30">
                0{{ index + 1 }}
              </span>
            </div>
            <CardTitle>{{ title }}</CardTitle>
          </CardHeader>
          <CardContent class="text-muted-foreground">{{ description }}</CardContent>
        </Card>
      </div>
    </div>
  </section>
</template>
