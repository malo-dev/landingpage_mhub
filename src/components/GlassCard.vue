<script setup lang="ts">
/**
 * Carte glass avec tilt 3D au curseur + contenu "posé" sur des plans Z
 * différents (icône/titre/texte), pour une vraie sensation de profondeur
 * au survol. Utilise `.glass-panel` (thème clair/sombre) plutôt que
 * `.liquid-glass` (fixé blanc, pensé pour le hero vidéo) — adapté pour
 * s'intégrer au reste du site M-NETHUB.
 */
import type { Component } from "vue";
import { motion, useMotionValue, useSpring, useTransform } from "motion-v";

defineProps<{
  icon: Component;
  title: string;
  text: string;
}>();

const mvX = useMotionValue(0);
const mvY = useMotionValue(0);

const rotateXRaw = useTransform(mvY, [-0.5, 0.5], [8, -8]);
const rotateYRaw = useTransform(mvX, [-0.5, 0.5], [-8, 8]);

const rotateX = useSpring(rotateXRaw, { stiffness: 150, damping: 18 });
const rotateY = useSpring(rotateYRaw, { stiffness: 150, damping: 18 });

const onMouseMove = (e: MouseEvent) => {
  const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
  mvX.set((e.clientX - rect.left) / rect.width - 0.5);
  mvY.set((e.clientY - rect.top) / rect.height - 0.5);
};

const onMouseLeave = () => {
  mvX.set(0);
  mvY.set(0);
};
</script>

<template>
  <motion.div
    class="glass-panel tech-glow preserve-3d rounded-2xl p-6 sm:p-7"
    :style="{ rotateX, rotateY, transformPerspective: 800 }"
    @mousemove="onMouseMove"
    @mouseleave="onMouseLeave"
  >
    <div
      class="glass-panel flex h-11 w-11 items-center justify-center rounded-xl"
      :style="{ transform: 'translateZ(40px)' }"
    >
      <component :is="icon" :size="20" :stroke-width="1.5" class="text-primary" />
    </div>
    <h3 class="mb-2 mt-4 text-lg font-medium text-foreground" :style="{ transform: 'translateZ(30px)' }">
      {{ title }}
    </h3>
    <p class="text-sm leading-relaxed text-muted-foreground" :style="{ transform: 'translateZ(20px)' }">
      {{ text }}
    </p>
  </motion.div>
</template>
