<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { ArrowRight, CheckCircle2, Mail, Search, ShoppingCart } from "lucide-vue-next";
import { products } from "@/data/products";

const { t, tm } = useI18n();
const figures = computed(() => tm("home.figures") as { v: string; l: string }[]);

// Aperçu : chaque produit est une "app" dans l'espace M-NETHUB (maquette HTML/CSS, suit le thème).
const tiles = products.map((p) => ({ ...p }));
</script>

<template>
  <section id="top" class="relative overflow-x-clip pb-12 pt-10 sm:pt-14">
    <div class="pointer-events-none absolute inset-x-0 -top-[68px] bottom-0" aria-hidden="true">
      <div class="hero-grid absolute inset-0 opacity-60" />
      <div class="absolute -right-24 -top-36 h-[560px] w-[660px] rounded-full bg-primary/25 blur-[60px]" />
      <div class="absolute -left-40 top-32 h-[420px] w-[460px] rounded-full bg-gold/20 blur-[60px]" />
    </div>

    <div class="container relative grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.08fr)]">
      <div>
        <span class="anim-rise inline-flex items-center gap-2.5 rounded-full border border-border bg-card py-1.5 pl-3 pr-4 text-[12.5px] font-medium text-muted-foreground">
          <span class="size-[7px] rounded-full bg-primary ring-4 ring-primary/15" />
          {{ t("home.hero.eyebrow") }}
        </span>

        <h1 class="anim-rise mt-5 text-[clamp(2.25rem,5.2vw,3.6rem)] font-extrabold leading-[1.05] tracking-[-0.03em]" style="animation-delay: 0.05s">
          {{ t("home.hero.title1") }}
          <span class="text-gradient">{{ t("home.hero.titleAccent") }}</span>
        </h1>

        <p class="anim-rise mt-6 max-w-[530px] text-[17px] leading-relaxed text-muted-foreground" style="animation-delay: 0.1s">
          {{ t("home.hero.subtitle") }}
        </p>

        <div class="anim-rise mt-8 flex flex-wrap gap-3" style="animation-delay: 0.15s">
          <a
            href="#produits"
            class="inline-flex h-12 items-center gap-2 rounded-xl bg-primary px-6 text-[15px] font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:-translate-y-0.5 hover:bg-primary/90"
          >
            {{ t("home.hero.ctaProducts") }} <ArrowRight class="size-[18px]" />
          </a>
          <a
            href="#devis"
            class="inline-flex h-12 items-center rounded-xl border border-input bg-card px-6 text-[15px] font-semibold shadow-sm transition-all hover:-translate-y-0.5 hover:bg-muted"
          >
            {{ t("home.hero.ctaQuote") }}
          </a>
        </div>

        <ul class="anim-rise mt-6 flex flex-wrap gap-x-5 gap-y-2 text-[13px] text-muted-foreground" style="animation-delay: 0.2s">
          <li v-for="k in ['r1', 'r2', 'r3']" :key="k" class="inline-flex items-center gap-1.5">
            <CheckCircle2 class="size-4 text-emerald-500" /> {{ t(`home.hero.${k}`) }}
          </li>
        </ul>
      </div>

      <!-- Maquette : l'espace M-NETHUB et ses produits -->
      <div class="relative pb-7 anim-rise" style="animation-delay: 0.15s" aria-hidden="true">
        <div class="mock overflow-hidden rounded-[18px] border border-border bg-card">
          <div class="flex h-9 items-center gap-1.5 border-b border-border bg-muted px-3.5">
            <i class="size-[9px] rounded-full bg-border" /><i class="size-[9px] rounded-full bg-border" /><i class="size-[9px] rounded-full bg-border" />
            <span class="ml-3 font-mono text-[11px] text-muted-foreground/80">m-nethub.tech</span>
          </div>
          <div class="grid min-h-[360px] grid-cols-1 sm:grid-cols-[168px_1fr]">
            <aside class="hidden flex-col gap-1 border-r border-border bg-muted p-3 text-[11.5px] sm:flex">
              <div class="mb-2 px-1.5 text-[10.5px] font-bold uppercase tracking-wider text-muted-foreground/70">{{ t("home.hero.mockTitle") }}</div>
              <div
                v-for="(p, i) in tiles"
                :key="p.key"
                class="flex items-center gap-2 rounded-lg px-2 py-1.5"
                :class="i === 0 ? 'bg-card font-semibold shadow-sm' : 'text-muted-foreground'"
              >
                <span class="grid size-5 place-items-center rounded-md" :style="{ background: `color-mix(in srgb, ${p.color} 16%, transparent)`, color: p.color }">
                  <component :is="p.icon" class="size-3" />
                </span>
                {{ t(`home.products.items.${p.key}.name`) }}
              </div>
            </aside>
            <div class="flex flex-col gap-3 bg-background p-4">
              <div class="flex items-center gap-2 rounded-[10px] border border-border bg-card px-3 py-2 text-[11px] text-muted-foreground/80">
                <Search class="size-3.5" /> M-Mail · M-Store · M-Market · M-HMS · M-Cloud…
              </div>
              <div class="grid grid-cols-3 gap-2.5">
                <div
                  v-for="p in tiles"
                  :key="p.key"
                  class="flex flex-col items-start gap-2 rounded-xl border border-border bg-card p-3 shadow-sm"
                >
                  <span class="grid size-8 place-items-center rounded-[10px]" :style="{ background: `color-mix(in srgb, ${p.color} 15%, transparent)`, color: p.color }">
                    <component :is="p.icon" class="size-4" />
                  </span>
                  <div>
                    <div class="text-[12px] font-bold leading-tight">{{ t(`home.products.items.${p.key}.name`) }}</div>
                    <div class="mt-0.5 text-[10px] leading-tight text-muted-foreground">{{ t(`home.products.items.${p.key}.badge`) }}</div>
                  </div>
                </div>
              </div>
              <div class="mt-auto flex items-center gap-3 rounded-xl border border-border bg-card p-3">
                <div class="h-8 flex-1 rounded-md bg-gradient-to-r from-primary/25 via-primary/10 to-transparent" />
                <div class="h-8 w-16 rounded-md bg-gold/25" />
                <div class="h-8 w-10 rounded-md bg-primary/15" />
              </div>
            </div>
          </div>
        </div>

        <div class="chip absolute -top-6 left-[10%] flex items-center gap-2.5 rounded-2xl border border-border bg-background/80 py-2.5 pl-2.5 pr-3.5 shadow-lg backdrop-blur-md" style="animation: pop 0.6s 0.7s cubic-bezier(0.34,1.56,0.64,1) both, bob 6s 1.4s ease-in-out infinite">
          <span class="grid size-8 place-items-center rounded-[9px] bg-primary/15 text-primary"><Mail class="size-4" /></span>
          <span class="leading-tight"><b class="block text-[12.5px]">{{ t("home.hero.chip1") }}</b><small class="text-[11px] text-muted-foreground">{{ t("home.hero.chip1s") }}</small></span>
        </div>
        <div class="chip absolute -bottom-1 right-[4%] flex items-center gap-2.5 rounded-2xl border border-border bg-background/80 py-2.5 pl-2.5 pr-3.5 shadow-lg backdrop-blur-md" style="animation: pop 0.6s 1.1s cubic-bezier(0.34,1.56,0.64,1) both, bob 7s 1.8s ease-in-out infinite reverse">
          <span class="grid size-8 place-items-center rounded-[9px] bg-emerald-500/15 text-emerald-500"><ShoppingCart class="size-4" /></span>
          <span class="leading-tight"><b class="block text-[12.5px]">{{ t("home.hero.chip2") }}</b><small class="text-[11px] text-muted-foreground">{{ t("home.hero.chip2s") }}</small></span>
        </div>
      </div>
    </div>

    <!-- Chiffres clés -->
    <div class="container relative mt-14">
      <ul class="figures grid grid-cols-2 overflow-hidden rounded-[26px] border border-border bg-card lg:grid-cols-4">
        <li
          v-for="(f, i) in figures"
          :key="i"
          class="flex flex-col gap-0.5 px-6 py-5"
          :class="[i % 2 === 1 ? 'border-l border-border' : '', i >= 2 ? 'border-t border-border lg:border-t-0' : '', i > 0 ? 'lg:border-l lg:border-border' : '']"
        >
          <strong class="font-display text-[22px] tracking-tight">{{ f.v }}</strong>
          <span class="text-[13px] text-muted-foreground">{{ f.l }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.mock {
  box-shadow: 0 24px 60px -12px hsl(var(--foreground) / 0.18), 0 50px 90px -50px hsl(var(--primary) / 0.5);
  transform: perspective(1500px) rotateY(-5deg) rotateX(2deg);
  transition: transform 0.6s cubic-bezier(0.2, 0.7, 0.3, 1);
}
@media (max-width: 1023px) { .mock { transform: none; } }
</style>
