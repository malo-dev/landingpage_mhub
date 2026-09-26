<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { ArrowUpRight, Check } from "lucide-vue-next";
import { products } from "@/data/products";

const { t, tm } = useI18n();
const points = (key: string) => tm(`home.products.items.${key}.points`) as string[];
</script>

<template>
  <section id="produits" class="section-pad border-y border-border bg-muted/60">
    <div class="container">
      <div v-animate class="mb-12 max-w-2xl">
        <span class="kicker">{{ t("home.products.label") }}</span>
        <h2 class="section-title">{{ t("home.products.title") }}</h2>
        <p class="section-lead">{{ t("home.products.subtitle") }}</p>
      </div>

      <div class="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <component
          :is="p.href.startsWith('/') ? 'RouterLink' : 'a'"
          v-for="(p, i) in products"
          :key="p.key"
          v-animate="{ type: 'fade-up', delay: (i % 3) * 90 }"
          v-bind="p.href.startsWith('/') ? { to: p.href } : { href: p.href, ...(p.external ? { target: '_blank', rel: 'noopener' } : {}) }"
          class="surface-card group relative flex flex-col overflow-hidden p-6"
          :style="{ '--p': p.color }"
        >
          <div class="pointer-events-none absolute -right-16 -top-16 size-44 rounded-full opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100" :style="{ background: `color-mix(in srgb, ${p.color} 30%, transparent)` }" />

          <div class="relative flex items-start justify-between">
            <span class="grid size-12 place-items-center rounded-2xl" :style="{ background: `color-mix(in srgb, ${p.color} 14%, transparent)`, color: p.color }">
              <component :is="p.icon" class="size-6" />
            </span>
            <span class="rounded-full px-3 py-1 text-[11.5px] font-bold" :style="{ background: `color-mix(in srgb, ${p.color} 12%, transparent)`, color: p.color }">
              {{ t(`home.products.items.${p.key}.badge`) }}
            </span>
          </div>

          <h3 class="relative mt-5 text-xl font-extrabold">{{ t(`home.products.items.${p.key}.name`) }}</h3>
          <p class="relative mt-1 text-[14.5px] font-semibold leading-snug">{{ t(`home.products.items.${p.key}.tag`) }}</p>
          <p class="relative mt-3 flex-1 text-[14px] leading-relaxed text-muted-foreground">{{ t(`home.products.items.${p.key}.desc`) }}</p>

          <ul class="relative mt-5 space-y-2 text-[13.5px]">
            <li v-for="pt in points(p.key)" :key="pt" class="flex items-start gap-2">
              <Check class="mt-0.5 size-4 flex-shrink-0" :style="{ color: p.color }" />
              <span>{{ pt }}</span>
            </li>
          </ul>

          <span class="relative mt-6 inline-flex items-center gap-1.5 text-sm font-bold" :style="{ color: p.color }">
            {{ t(`home.products.items.${p.key}.cta`) }}
            <ArrowUpRight class="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
        </component>
      </div>
    </div>
  </section>
</template>
