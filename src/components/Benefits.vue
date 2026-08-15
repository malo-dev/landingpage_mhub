<script setup lang="ts">
import { computed, ref } from "vue";
import { useI18n } from "vue-i18n";
import { Globe, Zap, ShieldCheck, HeadphonesIcon } from "lucide-vue-next";
import { motion, useScroll, useTransform } from "motion-v";
import Reveal3D from "./Reveal3D.vue";
import GlassCard from "./GlassCard.vue";

const { t, tm } = useI18n();

const icons = [Zap, Globe, ShieldCheck, HeadphonesIcon];

const benefitList = computed(() =>
  (tm('benefits.items') as any[]).map((item: any, i: number) => ({
    icon: icons[i],
    title: item.title,
    text: item.description,
  }))
);

const sectionRef = ref<HTMLElement | null>(null);
const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
const headingY = useTransform(scrollYProgress, [0, 1], [60, -60]);
</script>

<template>
  <section id="about" ref="sectionRef" class="scene container py-24 sm:py-32">
    <Reveal3D :amount="0.4">
      <motion.div :style="{ y: headingY }" class="max-w-xl">
        <div class="section-eyebrow mb-3">{{ t('benefits.label') }}</div>
        <h2 class="text-3xl md:text-4xl font-bold mb-4">{{ t('benefits.title') }}</h2>
        <p class="text-xl text-muted-foreground">{{ t('benefits.subtitle') }}</p>
      </motion.div>
    </Reveal3D>

    <div class="mt-12 grid gap-5 sm:grid-cols-2">
      <Reveal3D v-for="(benefit, i) in benefitList" :key="i" :delay="i * 0.12">
        <GlassCard :icon="benefit.icon" :title="benefit.title" :text="benefit.text" />
      </Reveal3D>
    </div>
  </section>
</template>
