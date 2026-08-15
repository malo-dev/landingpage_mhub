<script setup lang="ts">
/**
 * Wrapper générique de reveal 3D au scroll — droite → gauche avec perspective.
 * Le parent doit porter la classe `.scene` pour que rotateY/z se rendent en 3D.
 * `viewport.once = false` : l'animation se rejoue à chaque entrée/sortie du
 * viewport (effet "plus je scroll, plus ça bouge").
 */
import { motion, useReducedMotion } from "motion-v";

withDefaults(
  defineProps<{
    delay?: number;
    amount?: number;
  }>(),
  { delay: 0, amount: 0.3 }
);

const prefersReducedMotion = useReducedMotion();
</script>

<template>
  <motion.div
    class="preserve-3d card-face will-change-transform transform-gpu"
    :initial="
      prefersReducedMotion
        ? { opacity: 1, x: 0, rotateY: 0, z: 0, scale: 1 }
        : { opacity: 0, x: 140, rotateY: -30, z: -120, scale: 0.9 }
    "
    :while-in-view="{ opacity: 1, x: 0, rotateY: 0, z: 0, scale: 1 }"
    :in-view-options="{ once: false, amount }"
    :transition="{ duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] }"
  >
    <slot />
  </motion.div>
</template>
