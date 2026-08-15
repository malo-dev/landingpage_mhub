<script setup lang="ts">
import { useColorMode } from "@vueuse/core";
// Le mode clair est le thème par défaut au premier chargement ;
// un visiteur qui bascule en sombre voit son choix mémorisé (localStorage) au retour.
useColorMode({ initialValue: "light" });
</script>

<template>
  <RouterView />
</template>
