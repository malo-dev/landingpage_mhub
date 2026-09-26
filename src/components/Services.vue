<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import {
  Smartphone, Bot, Brain, Video, Shield, BarChart3, Cloud,
  Megaphone, Wifi, Code2, Lock, Link, Settings,
} from "lucide-vue-next";

const { t, tm } = useI18n();
const iconList = [Smartphone, Bot, Brain, Video, Shield, BarChart3, Cloud, Megaphone, Wifi, Code2, Lock, Link, Settings];

const serviceList = computed(() =>
  (tm("services.items") as any[]).map((item: any, i: number) => ({
    icon: iconList[i],
    title: item.title as string,
    description: item.description as string,
  }))
);
</script>

<template>
  <section id="services" class="section-pad">
    <div class="container">
      <div v-animate class="mb-12 max-w-2xl">
        <span class="kicker">{{ t("services.label") }}</span>
        <h2 class="section-title">{{ t("services.title") }}</h2>
        <p class="section-lead">{{ t("services.subtitle") }}</p>
      </div>

      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="(s, i) in serviceList"
          :key="i"
          v-animate="{ type: 'fade-up', delay: (i % 4) * 70 }"
          class="surface-card flex flex-col p-6"
          :class="i === serviceList.length - 1 ? 'sm:col-span-2 lg:col-span-4 lg:flex-row lg:items-center lg:gap-6' : ''"
        >
          <span class="grid size-[42px] flex-shrink-0 place-items-center rounded-xl bg-accent text-accent-foreground">
            <component :is="s.icon" class="size-5" />
          </span>
          <div>
            <h3 class="mt-4 text-[16px] font-bold leading-snug" :class="i === serviceList.length - 1 ? 'lg:mt-0' : ''">{{ s.title }}</h3>
            <p class="mt-2 text-[13.5px] leading-relaxed text-muted-foreground">{{ s.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
