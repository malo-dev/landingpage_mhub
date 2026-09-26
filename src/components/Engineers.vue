<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { ArrowRight, Bot, Check, BarChart3, Monitor, Palette, Shield, Video } from "lucide-vue-next";

const { t, tm } = useI18n();
const icons = [Monitor, Bot, Shield, Palette, BarChart3, Video];
const profiles = computed(() =>
  (tm("engineers.profiles") as any[]).map((p: any, i: number) => ({
    icon: icons[i],
    title: p.title as string,
    skills: p.skills as string[],
  }))
);
</script>

<template>
  <section id="ingenieurs" class="section-pad">
    <div class="container">
      <div class="mb-12 flex flex-wrap items-end justify-between gap-6">
        <div v-animate class="max-w-2xl">
          <span class="kicker">{{ t("engineers.label") }}</span>
          <h2 class="section-title">{{ t("engineers.title") }}</h2>
          <p class="section-lead">{{ t("engineers.subtitle") }}</p>
        </div>
        <a
          href="#contact"
          class="inline-flex h-11 items-center gap-2 rounded-xl border border-input bg-card px-5 text-sm font-semibold shadow-sm transition-all hover:-translate-y-0.5 hover:bg-muted"
        >
          {{ t("home.team.cta") }} <ArrowRight class="size-4" />
        </a>
      </div>

      <div class="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <div v-for="(p, i) in profiles" :key="i" v-animate="{ type: 'fade-up', delay: (i % 3) * 90 }" class="surface-card p-6">
          <span class="grid size-12 place-items-center rounded-2xl bg-accent text-accent-foreground"><component :is="p.icon" class="size-6" /></span>
          <h3 class="mt-5 text-lg font-extrabold">{{ p.title }}</h3>
          <p class="mt-0.5 text-[13px] text-muted-foreground">{{ t("engineers.specialized") }}</p>
          <ul class="mt-5 space-y-2.5">
            <li v-for="s in p.skills" :key="s" class="flex items-start gap-2 text-[14px]">
              <Check class="mt-0.5 size-4 flex-shrink-0 text-primary" /> {{ s }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
