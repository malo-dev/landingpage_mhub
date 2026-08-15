<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-vue-next";
import { motion, useScroll, useTransform } from "motion-v";
import HeroScene from "./HeroScene.vue";

const { t } = useI18n();

// Le hero "recule" (grossit + s'estompe) tandis que la section suivante
// monte par-dessus, sur les 30 premiers % du scroll de la page.
const { scrollYProgress } = useScroll();
const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.08]);
const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.4]);
</script>

<template>
  <section id="top" class="relative flex min-h-[85vh] items-center overflow-hidden pt-10 pb-20">
    <!-- Grille tech + halos de fond -->
    <div class="grid-bg absolute inset-0 -z-10 opacity-60" />
    <div class="absolute -top-32 left-1/4 -z-10 h-96 w-96 rounded-full bg-primary/20 blur-[120px]" />
    <div class="absolute -bottom-32 right-1/4 -z-10 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" />

    <!-- Scène 3D d'ambiance (icosaèdre + particules) -->
    <div class="absolute inset-y-0 right-0 -z-10 hidden w-1/2 md:block">
      <HeroScene />
    </div>
    <div class="absolute inset-0 -z-10 md:hidden opacity-30">
      <HeroScene />
    </div>

    <motion.div class="container" :style="{ scale: heroScale, opacity: heroOpacity }">
      <div class="max-w-2xl space-y-6">
        <div v-animate class="section-eyebrow inline-flex rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5">
          <span class="size-2 rounded-full bg-primary animate-pulse" />
          {{ t('hero.badge') }}
        </div>

        <h1 v-animate="{ delay: 100 }" class="text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
          M-NETHUB<br />
          <span class="text-transparent bg-gradient-to-r from-primary to-[#0099BB] bg-clip-text">
            {{ t('hero.title') }}
          </span>
        </h1>

        <p v-animate="{ delay: 200 }" class="max-w-xl text-lg text-muted-foreground sm:text-xl" style="white-space: pre-line;">
          {{ t('hero.subtitle') }}
        </p>

        <div v-animate="{ delay: 300 }" class="flex flex-wrap gap-4 pt-2">
          <Button size="lg" class="group/arrow font-bold" as-child>
            <a href="#mstore">
              {{ t('hero.discoverMstore') }}
              <ArrowRight class="ml-2 size-5 transition-transform group-hover/arrow:translate-x-1" />
            </a>
          </Button>
          <Button size="lg" variant="outline" class="glass-panel border-primary/30 font-bold" as-child>
            <a href="#devis">{{ t('hero.requestQuote') }}</a>
          </Button>
        </div>
      </div>
    </motion.div>

    <!-- Indicateur de scroll -->
    <a
      href="#about"
      class="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-xs uppercase tracking-widest text-muted-foreground opacity-60 transition-opacity hover:opacity-100 sm:flex"
    >
      <span>{{ t('hero.scroll') }}</span>
      <ChevronDown class="size-4 animate-bounce" />
    </a>
  </section>
</template>
