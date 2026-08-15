<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "@/lib/utils";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <div
    :class="
      cn(
        'rounded-2xl border border-border/60 bg-card/70 text-card-foreground shadow-sm backdrop-blur-xl transition-colors duration-300',
        props.class
      )
    "
  >
    <slot />
  </div>
</template>
