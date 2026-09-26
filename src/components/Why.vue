<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { Globe, Globe2, HeadphonesIcon, MapPin, ShieldCheck, Zap } from "lucide-vue-next";

const { t, tm } = useI18n();

const icons = [Zap, Globe, ShieldCheck, HeadphonesIcon];
const benefits = computed(() =>
  (tm("benefits.items") as any[]).map((b: any, i: number) => ({ icon: icons[i], title: b.title as string, text: b.description as string }))
);

const steps = [
  { key: "card1", icon: MapPin },
  { key: "card2", icon: Globe },
  { key: "card3", icon: Globe2 },
];
</script>

<template>
  <section id="vision" class="section-pad border-y border-border bg-muted/60">
    <div class="container">
      <div v-animate class="mb-12 max-w-2xl">
        <span class="kicker">{{ t("home.why.label") }}</span>
        <h2 class="section-title">{{ t("home.why.title") }}</h2>
        <p class="section-lead">{{ t("home.why.subtitle") }}</p>
      </div>

      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div v-for="(b, i) in benefits" :key="i" v-animate="{ type: 'fade-up', delay: i * 80 }" class="surface-card p-6">
          <span class="grid size-[42px] place-items-center rounded-xl bg-accent text-accent-foreground"><component :is="b.icon" class="size-5" /></span>
          <h3 class="mt-4 text-[16px] font-bold leading-snug">{{ b.title }}</h3>
          <p class="mt-2 text-[13.5px] leading-relaxed text-muted-foreground">{{ b.text }}</p>
        </div>
      </div>

      <!-- Vision : 3 étapes -->
      <div class="mt-16">
        <div v-animate class="mb-8 max-w-2xl">
          <span class="kicker">{{ t("vision.label") }}</span>
          <h2 class="section-title">{{ t("vision.title") }}</h2>
          <p class="section-lead">{{ t("vision.subtitle") }}</p>
        </div>
        <div class="grid gap-5 md:grid-cols-3">
          <div v-for="(s, i) in steps" :key="s.key" v-animate="{ type: 'fade-up', delay: i * 100 }" class="relative rounded-[18px] border border-border bg-card p-7 shadow-sm">
            <span class="absolute right-6 top-5 font-display text-5xl font-extrabold leading-none text-foreground/[0.06]">{{ i + 1 }}</span>
            <span class="grid size-[46px] place-items-center rounded-[13px] bg-primary text-primary-foreground shadow-lg shadow-primary/30">
              <component :is="s.icon" class="size-[22px]" />
            </span>
            <div class="mt-5 text-[12.5px] font-bold uppercase tracking-wider text-gold">{{ t(`vision.${s.key}.year`) }}</div>
            <h3 class="mt-1 text-[18px] font-extrabold">{{ t(`vision.${s.key}.title`) }}</h3>
            <p class="mt-2 text-[14px] leading-relaxed text-muted-foreground">{{ t(`vision.${s.key}.text`) }}</p>
          </div>
        </div>
        <p v-animate class="mx-auto mt-12 max-w-3xl text-center font-display text-xl font-semibold leading-snug md:text-2xl">
          {{ t("vision.quote") }}<br />
          <span class="text-gradient">{{ t("vision.quoteEnd") }}</span>
        </p>
      </div>
    </div>
  </section>
</template>
