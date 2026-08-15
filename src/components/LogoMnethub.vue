<script setup lang="ts">
/**
 * Logo M-NETHUB — recréé en SVG (icône M/réseau + wordmark).
 * Le réseau de nœuds et le wordmark utilisent `currentColor` : ils héritent
 * la couleur de texte du contexte (ex: `text-foreground` en-tête normal,
 * `text-white` sur un hero vidéo) — passez une classe `text-*` au composant.
 * Les 3 piliers bleus et le nœud gris restent des couleurs de marque fixes.
 */
withDefaults(
  defineProps<{
    variant?: "horizontal" | "stacked" | "icon";
    iconClass?: string;
    textClass?: string;
  }>(),
  { variant: "horizontal" }
);
</script>

<template>
  <div
    :class="[
      'inline-flex items-center',
      variant === 'stacked' ? 'flex-col gap-2' : 'flex-row gap-2.5',
    ]"
  >
    <svg viewBox="0 0 100 100" :class="iconClass || 'h-9 w-9 flex-shrink-0'" aria-hidden="true">
      <!-- Piliers bleus formant le "M" -->
      <path d="M8,88 L8,52 L19,16 L30,52 L30,88 Z" fill="#29B6E8" />
      <path d="M36,88 L36,52 A11,11 0 0 1 58,52 L58,88 Z" fill="#29B6E8" />
      <path d="M64,88 L64,52 A11,11 0 0 1 86,52 L86,88 Z" fill="#29B6E8" />

      <!-- Nœud d'accent (gris, fixe) -->
      <circle cx="17" cy="26" r="9" fill="#9CA6AE" />

      <!-- Graphe réseau — s'adapte au thème via currentColor -->
      <g fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round">
        <line x1="14" y1="64" x2="33" y2="58" />
        <line x1="33" y1="58" x2="44" y2="78" />
        <line x1="33" y1="58" x2="63" y2="42" />
        <line x1="44" y1="78" x2="63" y2="42" />
        <line x1="63" y1="42" x2="73" y2="66" />
        <line x1="44" y1="78" x2="73" y2="66" />
      </g>
      <g fill="currentColor">
        <circle cx="14" cy="64" r="3.2" />
        <circle cx="33" cy="58" r="4" />
        <circle cx="44" cy="78" r="5" />
        <circle cx="63" cy="42" r="4" />
        <circle cx="73" cy="66" r="5" />
      </g>
    </svg>

    <span
      v-if="variant !== 'icon'"
      :class="[
        'font-wordmark font-extrabold uppercase tracking-tight leading-none',
        textClass || 'text-lg',
        variant === 'stacked' ? 'text-center' : '',
      ]"
    >M-NETHUB</span>
  </div>
</template>
